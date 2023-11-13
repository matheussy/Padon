package br.com.padon.application.controllers;

import br.com.padon.application.dtos.ProdutoDto;
import br.com.padon.application.models.Fornece;
import br.com.padon.application.models.Produto;
import br.com.padon.application.repositorys.ForneceRepository;
import br.com.padon.application.repositorys.ProdutoRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("/produto")
public class ProdutoController {

	@Autowired
	private ProdutoRepository produto;
	@Autowired
	private ForneceRepository fornece;

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

	@PostMapping("/fromfornecedor")
	public List<ProdutoDto> getProdutoFromFornecedor(@RequestBody JsonNode node) {
		int fornecedorId = node.get("id").asInt();
		return produto.getProdutosFromFornecedor(fornecedorId).stream().map(p -> {
			Fornece forneceModel = fornece.getFornece(p.getProdutoId(), fornecedorId);
			double preco = forneceModel != null ? forneceModel.getPreco() : 0;
			return new ProdutoDto(
					p.getProdutoId(),
					p.getNome(),
					p.getFabricante(),
					p.getImage(),
					p.getCodigoDeBarras(),
					p.isBloqueado(),
					p.getPrecoPorQuilo(),
					p.getPrecoPorUnidade(),
					p.isPorQuilo(),
					preco
			);
		}).collect(Collectors.toList());
	}

	@PostMapping("/outfornecedor")
	public List<ProdutoDto> getProdutoOutFornecedor(@RequestBody JsonNode node) {
		int fornecedorId = node.get("id").asInt();
		return produto.getProdutosOutFornecedor(fornecedorId).stream().map(p -> {
			Fornece forneceModel = fornece.getFornece(p.getProdutoId(), fornecedorId);
			double preco = forneceModel != null ? forneceModel.getPreco() : 0;
			return new ProdutoDto(
					p.getProdutoId(),
					p.getNome(),
					p.getFabricante(),
					p.getImage(),
					p.getCodigoDeBarras(),
					p.isBloqueado(),
					p.getPrecoPorQuilo(),
					p.getPrecoPorUnidade(),
					p.isPorQuilo(),
					preco
			);
		}).collect(Collectors.toList());
	}
}
