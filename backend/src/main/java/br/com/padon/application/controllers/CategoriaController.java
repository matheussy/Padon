package br.com.padon.application.controllers;

import br.com.padon.application.models.Categoria;
import br.com.padon.application.repositorys.CategoriaRepository;
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

	@PostMapping("/create")
	public void createCategoria(@RequestBody JsonNode node) {
		categoria.save(new Categoria(node.get("nome").asText(), node.get("descricao").asText()));
	}

	@GetMapping("/get")
	public List<Categoria> getAllCategorias() {
		return categoria.findAll();
	}

	@PostMapping("/save")
	public void saveCategoria(@RequestBody JsonNode node) {
		Categoria categoriaById = categoria.findById(node.get("id").asInt()).orElseThrow();
		categoriaById.setNome(node.get("nome").asText());
		categoriaById.setDescricao(node.get("descricao").asText());
		categoria.save(categoriaById);
	}

	@PostMapping("/byid")
	public Categoria getCategoria(@RequestBody JsonNode node) {
		return categoria.findById(node.get("id").asInt()).orElseThrow();
	}

	@PostMapping("/delete")
	public void deleteCategoria(@RequestBody JsonNode node) {
		categoria.deleteById(node.get("id").asInt());
	}
}
