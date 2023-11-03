package br.com.padon.application.controllers;

import br.com.padon.application.models.Categoria;
import br.com.padon.application.repositorys.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class CategoriaController {

	@Autowired
	private CategoriaRepository categoria;

	@PostMapping("/categoria/create")
	public void createCategoria(@RequestParam(name = "nome") String nome, @RequestParam(name = "descricao") String descricao) {
		categoria.save(new Categoria(nome, descricao));
	}

	@GetMapping("/categoria/get")
	public List<Categoria> getAllCategorias() {
		return categoria.findAll();
	}

	@PostMapping("/categoria/save")
	public void saveCategoria(@RequestParam(name = "id") int categoriaId, @RequestParam(name = "nome") String nome, @RequestParam(name = "descricao") String descricao) {
		Categoria categoriaById = categoria.findById(categoriaId).orElseThrow();
		categoriaById.setNome(nome);
		categoriaById.setDescricao(descricao);
		categoria.save(categoriaById);
	}

	@PostMapping("/categoria/byid")
	public Optional<Categoria> saveCategoria(@RequestParam(name = "id") int categoriaId) {
		return categoria.findById(categoriaId);
	}
}
