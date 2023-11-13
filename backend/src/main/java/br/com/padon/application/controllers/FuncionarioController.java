package br.com.padon.application.controllers;

import br.com.padon.application.models.Funcionario;
import br.com.padon.application.repositorys.FuncionarioRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/funcionario")
public class FuncionarioController {

	@Autowired
	private FuncionarioRepository funcionario;

	@PostMapping("/create")
	public Funcionario createFornecedor(@RequestBody JsonNode node) {
		return funcionario.save(new Funcionario(
				node.get("cpf").asText(),
				node.get("usuario").asText(),
				node.get("nome").asText(),
				node.get("senha").asText(),
				node.get("email").asText(),
				node.get("telefone").asText(),
				node.get("gerente").asBoolean()
		));
	}

	@GetMapping("/get")
	public List<Funcionario> getAllFuncionarios() {
		return funcionario.findAll();
	}

	@PostMapping("/save")
	public Funcionario saveFuncionario(@RequestBody JsonNode node) {
		Funcionario fornecedorById = funcionario.findById(node.get("cpf").asText()).orElseThrow();
		fornecedorById.setUsuario(node.get("usuario").asText());
		fornecedorById.setNome(node.get("nome").asText());
		fornecedorById.setSenha(node.get("senha").asText());
		fornecedorById.setEmail(node.get("email").asText());
		fornecedorById.setTelefone(node.get("telefone").asText());
		fornecedorById.setGerente(node.get("gerente").asBoolean());
		return funcionario.save(fornecedorById);
	}

	@PostMapping("/byid")
	public Optional<Funcionario> getFuncionario(@RequestBody JsonNode node) {
		return funcionario.findById(node.get("cpf").asText());
	}

	@PostMapping("/delete")
	public boolean deleteFuncionario(@RequestBody JsonNode node) {
		funcionario.deleteById(node.get("cpf").asText());
		return true;
	}
}
