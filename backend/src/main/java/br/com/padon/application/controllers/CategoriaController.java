package br.com.padon.application.controllers;

import br.com.padon.application.models.Categoria;
import br.com.padon.application.models.Participa;
import br.com.padon.application.repositorys.CategoriaRepository;
import br.com.padon.application.repositorys.ParticipaRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/categoria")
public class CategoriaController {

	@Autowired
	private CategoriaRepository categoria;
	@Autowired
	private ParticipaRepository participa;

	@PostMapping("/create")
	public Categoria createCategoria(@RequestBody JsonNode node) {
		return categoria.save(new Categoria(node.get("nome").asText(), node.get("descricao").asText()));
	}

	@GetMapping("/get")
	public List<Categoria> getAllCategorias() {
		return categoria.findAll();
	}

	@PostMapping("/save")
	public Categoria saveCategoria(@RequestBody JsonNode node) {
		Categoria categoriaById = categoria.findById(node.get("id").asInt()).orElseThrow();
		categoriaById.setNome(node.get("nome").asText());
		categoriaById.setDescricao(node.get("descricao").asText());
		return categoria.save(categoriaById);
	}

	@PostMapping("/byid")
	public Categoria getCategoria(@RequestBody JsonNode node) {
		return categoria.findById(node.get("id").asInt()).orElseThrow();
	}

	@PostMapping("/delete")
	public boolean deleteCategoria(@RequestBody JsonNode node) {
		categoria.deleteById(node.get("id").asInt());
		return true;
	}

	@PostMapping("/add")
	public Participa addProduto(@RequestBody JsonNode node) {
		return participa.save(new Participa(node.get("produtoId").asInt(), node.get("categoriaId").asInt()));
	}

	@PostMapping("/remove")
	public boolean removeProduto(@RequestBody JsonNode node) {
		Participa result = participa.getParticipa(node.get("produtoId").asInt(), node.get("categoriaId").asInt());
		if (result == null) {
			return false;
		}

		participa.delete(result);
		return true;
	}
}
