package br.com.padon.application.controllers;

import br.com.padon.application.dtos.ProdutoDto;
import br.com.padon.application.models.*;
import br.com.padon.application.repositorys.ForneceRepository;
import br.com.padon.application.repositorys.LojaRepository;
import br.com.padon.application.repositorys.ProdutoRepository;
import br.com.padon.application.repositorys.TrabalhaRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("/loja")
public class LojaController {

	@Autowired
	private LojaRepository loja;
	@Autowired
	private TrabalhaRepository trabalha;

	@PostMapping("/create")
	public Loja createLoja(@RequestBody JsonNode node) {
		return loja.save(new Loja(
				node.get("nome").asText(),
				node.get("endereco").asText()
		));
	}

	@GetMapping("/get")
	public List<Loja> getAllLojas() {
		return loja.findAll();
	}

	@PostMapping("/save")
	public Loja saveLoja(@RequestBody JsonNode node) {
		Loja lojaById = loja.findById(node.get("id").asInt()).orElseThrow();
		lojaById.setNome(node.get("nome").asText());
		lojaById.setEndereco(node.get("endereco").asText());
		return loja.save(lojaById);
	}

	@PostMapping("/byid")
	public Optional<Loja> getLoja(@RequestBody JsonNode node) {
		return loja.findById(node.get("id").asInt());
	}

	@PostMapping("/delete")
	public boolean deleteLoja(@RequestBody JsonNode node) {
		loja.deleteById(node.get("id").asInt());
		return true;
	}

	@PostMapping("/addfuncionario")
	public Trabalha addFuncionario(@RequestBody JsonNode node) {
		return trabalha.save(new Trabalha(node.get("lojaId").asInt(), node.get("cpf").asText()));
	}

	@PostMapping("/removefuncionario")
	public boolean removeFuncionario(@RequestBody JsonNode node) {
		Trabalha result = trabalha.getTrabalha(node.get("lojaId").asInt(), node.get("cpf").asText());
		if (result == null) {
			return false;
		}

		trabalha.delete(result);
		return true;
	}
}
