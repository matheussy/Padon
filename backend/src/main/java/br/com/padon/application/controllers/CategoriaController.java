package br.com.padon.application.controllers;

import br.com.padon.application.models.Categoria;
import br.com.padon.application.repositorys.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/categoria")
public class CategoriaController {

	@Autowired
	private CategoriaRepository categoria;

	@PostMapping("/create")
	public void createCategoria(@RequestParam(name = "nome") String nome, @RequestParam(name = "descricao") String descricao) {
		categoria.save(new Categoria(nome, descricao));
	}

	@GetMapping("/get")
	public List<Categoria> getAllCategorias() {
		return categoria.findAll();
	}

	@PostMapping("/save")
	public void saveCategoria(@RequestParam(name = "id") int categoriaId, @RequestParam(name = "nome") String nome, @RequestParam(name = "descricao") String descricao) {
		Categoria categoriaById = categoria.findById(categoriaId).orElseThrow();
		categoriaById.setNome(nome);
		categoriaById.setDescricao(descricao);
		categoria.save(categoriaById);
	}

	@PostMapping("/byid")
	public Optional<Categoria> getCategoria(@RequestParam(name = "id") int categoriaId) {
		return categoria.findById(categoriaId);
	}

	@PostMapping("/delete")
	public void deleteCategoria(@RequestParam(name = "id") int categoriaId) {
		categoria.deleteById(categoriaId);
	}
}
