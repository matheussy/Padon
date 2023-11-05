package br.com.padon.application.controllers;

import br.com.padon.application.models.Fornecedor;
import br.com.padon.application.repositorys.FornecedorRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/fornecedor")
public class FornecedorController {

	@Autowired
	private FornecedorRepository fornecedor;

	@PostMapping("/create")
	public void createFornecedor(@RequestBody JsonNode node) {
		fornecedor.save(new Fornecedor(node.get("endereco").asText(), node.get("contato").asText(), node.get("telefone").asText(), node.get("nome").asText()));
	}

	@GetMapping("/get")
	public List<Fornecedor> getAllFornecedores() {
		return fornecedor.findAll();
	}

	@PostMapping("/save")
	public void saveFornecedor(@RequestBody JsonNode node) {
		Fornecedor fornecedorById = fornecedor.findById(node.get("id").asInt()).orElseThrow();
		fornecedorById.setEndereco(node.get("endereco").asText());
		fornecedorById.setContato(node.get("contato").asText());
		fornecedorById.setTelefone(node.get("telefone").asText());
		fornecedorById.setNome(node.get("nome").asText());
		fornecedor.save(fornecedorById);
	}

	@PostMapping("/byid")
	public Optional<Fornecedor> getFornecedor(@RequestBody JsonNode node) {
		return fornecedor.findById(node.get("id").asInt());
	}

	@PostMapping("/delete")
	public void deleteFornecedor(@RequestBody JsonNode node) {
		fornecedor.deleteById(node.get("id").asInt());
	}
}
