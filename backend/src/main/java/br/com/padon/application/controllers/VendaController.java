package br.com.padon.application.controllers;

import br.com.padon.application.models.Pertence;
import br.com.padon.application.models.Venda;
import br.com.padon.application.repositorys.PertenceRepository;
import br.com.padon.application.repositorys.VendaRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/venda")
public class VendaController {

	@Autowired
	private VendaRepository venda;
	@Autowired
	private PertenceRepository pertence;
	private final SimpleDateFormat parser = new SimpleDateFormat("dd/MM/yyyy");


	@PostMapping("/create")
	public Venda createVenda(@RequestBody JsonNode node) throws ParseException {
		return venda.save(new Venda(
				parser.parse(node.get("data").asText()),
				node.get("status").asBoolean(),
				node.get("valor").asDouble(),
				node.get("comanda").asInt()
		));
	}

	@GetMapping("/get")
	public List<Venda> getAllVendas() {
		return venda.findAll();
	}

	@PostMapping("/save")
	public Venda saveVenda(@RequestBody JsonNode node) throws ParseException {
		Venda vendaById = venda.findById(node.get("id").asInt()).orElseThrow();
		if (!vendaById.getStatusVenda()) {
			throw new IllegalAccessError("venda encerrada, alteração negada");
		}
		vendaById.setDataVenda(DateFormat.getDateInstance().parse(node.get("data").asText()));
		vendaById.setStatusVenda(node.get("status").asBoolean());
		vendaById.setValorTotal(node.get("valor").asDouble());
		vendaById.setComanda(node.get("comanda").asInt());
		return venda.save(vendaById);
	}

	@PostMapping("/byid")
	public Optional<Venda> getVenda(@RequestBody JsonNode node) {
		return venda.findById(node.get("id").asInt());
	}

	@PostMapping("/delete")
	public boolean deleteVenda(@RequestBody JsonNode node) {
		Venda vendaById = venda.findById(node.get("id").asInt()).orElseThrow();
		if (!vendaById.getStatusVenda()) {
			throw new IllegalAccessError("venda encerrada, alteração negada");
		}
		venda.delete(vendaById);
		return true;
	}

	@PostMapping("/add")
	public Pertence addProduto(@RequestBody JsonNode node) {
		int vendaId = node.get("vendaId").asInt();
		Venda vendaById = venda.findById(vendaId).orElseThrow();
		if (!vendaById.getStatusVenda()) {
			throw new IllegalAccessError("venda encerrada, alteração negada");
		}

		return pertence.save(new Pertence(
				node.get("produtoId").asInt(),
				vendaId,
				node.get("precoTotal").asDouble(),
				node.get("quantidade").asInt(),
				node.get("precoAtual").asDouble()
		));
	}

	@PostMapping("/remove")
	public boolean removeProduto(@RequestBody JsonNode node) {
		int vendaId = node.get("vendaId").asInt();
		Venda vendaById = venda.findById(vendaId).orElseThrow();
		if (!vendaById.getStatusVenda()) {
			throw new IllegalAccessError("venda encerrada, alteração negada");
		}

		Pertence result = pertence.getPertence(node.get("produtoId").asInt(), vendaId);
		if (result == null) {
			return false;
		}

		pertence.delete(result);
		return true;
	}

	@PostMapping("/editproduto")
	public Pertence editProduto(@RequestBody JsonNode node) {
		int vendaId = node.get("vendaId").asInt();
		Venda vendaById = venda.findById(vendaId).orElseThrow();
		if (!vendaById.getStatusVenda()) {
			throw new IllegalAccessError("venda encerrada, alteração negada");
		}

		Pertence pertenceById = pertence.getPertence(node.get("produtoId").asInt(), vendaId);
		pertenceById.setPrecoAtual(node.get("precoAtual").asDouble());
		pertenceById.setPrecoTotal(node.get("precoTotal").asDouble());
		pertenceById.setQuantidade(node.get("quantidade").asInt());
		return pertence.save(pertenceById);
	}
}
