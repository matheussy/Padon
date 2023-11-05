package br.com.padon.application.controllers;

import br.com.padon.application.models.Produto;
import br.com.padon.application.repositorys.ProdutoRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/produto")
public class ProdutoController {

	@Autowired
	private ProdutoRepository produto;

	@PostMapping("/create")
	public void createProduto(@RequestParam(name = "nome") String nome, @RequestParam(name = "fabricante") String fabricante, @RequestParam(name = "imagem") byte[] imagem, @RequestParam(name = "codigoDeBarras") double codigoDeBarras, @RequestParam(name = "bloquado") boolean bloquado, @RequestParam(name = "precoPorQuilo") double precoPorQuilo, @RequestParam(name = "precoPorUnidade") double precoPorUnidade, @RequestParam(name = "porQuilo") boolean porQuilo) {
		produto.save(new Produto(nome, fabricante, imagem, codigoDeBarras, bloquado, precoPorQuilo, precoPorUnidade, porQuilo));
	}

	@GetMapping("/get")
	public List<Produto> getAllProdutos() {
		return produto.findAll();
	}

	@PostMapping("/save")
	public void saveProduto(@RequestBody JsonNode node) throws IOException {
		Produto produtoById = produto.findById(node.get("id").asInt()).orElseThrow();
		produtoById.setNome(node.get("nome").asText());
		produtoById.setFabricante(node.get("fabricante").asText());
		produtoById.setImagem(node.get("imagem").binaryValue());
		produtoById.setCodigoDeBarras(node.get("codigoDeBarras").asDouble());
		produtoById.setBloquado(node.get("bloquado").asBoolean());
		produtoById.setPrecoPorQuilo(node.get("precoPorQuilo").asDouble());
		produtoById.setPrecoPorUnidade(node.get("precoPorUnidade").asDouble());
		produtoById.setPorQuilo(node.get("porQuilo").asBoolean());
		produto.save(produtoById);
	}

	@PostMapping("/byid")
	public Optional<Produto> getProduto(@RequestBody JsonNode node) {
		return produto.findById(node.get("id").asInt());
	}

	@PostMapping("/delete")
	public void deleteProduto(@RequestBody JsonNode node) {
		produto.deleteById(node.get("id").asInt());
	}
}
