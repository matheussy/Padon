package br.com.padon.application.controllers;

import br.com.padon.application.models.Produto;
import br.com.padon.application.repositorys.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
	public void saveProduto(@RequestParam(name = "id") int produtoId, @RequestParam(name = "nome") String nome, @RequestParam(name = "fabricante") String fabricante, @RequestParam(name = "imagem") byte[] imagem, @RequestParam(name = "codigoDeBarras") double codigoDeBarras, @RequestParam(name = "bloquado") boolean bloquado, @RequestParam(name = "precoPorQuilo") double precoPorQuilo, @RequestParam(name = "precoPorUnidade") double precoPorUnidade, @RequestParam(name = "porQuilo") boolean porQuilo) {
		Produto produtoById = produto.findById(produtoId).orElseThrow();
		produtoById.setNome(nome);
		produtoById.setFabricante(fabricante);
		produtoById.setImagem(imagem);
		produtoById.setCodigoDeBarras(codigoDeBarras);
		produtoById.setBloquado(bloquado);
		produtoById.setPrecoPorQuilo(precoPorQuilo);
		produtoById.setPrecoPorUnidade(precoPorUnidade);
		produtoById.setPorQuilo(porQuilo);
		produto.save(produtoById);
	}

	@PostMapping("/byid")
	public Optional<Produto> getProduto(@RequestParam(name = "id") int produtoId) {
		return produto.findById(produtoId);
	}

	@PostMapping("/delete")
	public void deleteProduto(@RequestParam(name = "id") int produtoId) {
		produto.deleteById(produtoId);
	}
}
