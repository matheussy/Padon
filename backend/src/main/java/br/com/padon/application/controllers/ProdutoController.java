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
	public Produto createProduto(@RequestBody JsonNode node) {
		return produto.save(new Produto(
				node.get("nome").asText(),
				node.get("fabricante").asText(),
				node.get("image").asText(),
				node.get("codigoDeBarras").asDouble(),
				node.get("bloqueado").asBoolean(),
				node.get("precoPorQuilo").asDouble(),
				node.get("precoPorUnidade").asDouble(),
				node.get("porQuilo").asBoolean()
		));
	}

	@GetMapping("/get")
	public List<Produto> getAllProdutos() {
		return produto.findAll();
	}

	@PostMapping("/save")
	public Produto saveProduto(@RequestBody JsonNode node) {
		Produto produtoById = produto.findById(node.get("id").asInt()).orElseThrow();
		produtoById.setNome(node.get("nome").asText());
		produtoById.setFabricante(node.get("fabricante").asText());
		produtoById.setImage(node.get("image").asText());
		produtoById.setCodigoDeBarras(node.get("codigoDeBarras").asDouble());
		produtoById.setBloqueado(node.get("bloqueado").asBoolean());
		produtoById.setPrecoPorQuilo(node.get("precoPorQuilo").asDouble());
		produtoById.setPrecoPorUnidade(node.get("precoPorUnidade").asDouble());
		produtoById.setPorQuilo(node.get("porQuilo").asBoolean());
		return produto.save(produtoById);
	}

	@PostMapping("/byid")
	public Optional<Produto> getProduto(@RequestBody JsonNode node) {
		return produto.findById(node.get("id").asInt());
	}

	@PostMapping("/delete")
	public boolean deleteProduto(@RequestBody JsonNode node) {
		produto.deleteById(node.get("id").asInt());
		return true;
	}

	@PostMapping("/fromcategoria")
	public List<Produto> getProdutoFromCategoria(@RequestBody JsonNode node) {
		return produto.getProdutosFromCategoria(node.get("id").asInt());
	}

	@PostMapping("/outcategoria")
	public List<Produto> getProdutoOutCategoria(@RequestBody JsonNode node) {
		return produto.getProdutosOutCategoria(node.get("id").asInt());
	}
}
