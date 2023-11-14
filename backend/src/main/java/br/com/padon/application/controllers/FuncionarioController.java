package br.com.padon.application.controllers;

import br.com.padon.application.models.Funcionario;
import br.com.padon.application.models.Produto;
import br.com.padon.application.models.Trabalha;
import br.com.padon.application.repositorys.FuncionarioRepository;
import br.com.padon.application.repositorys.TrabalhaRepository;
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
	public Funcionario createFuncionario(@RequestBody JsonNode node) {
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
		Funcionario funcionarioById = funcionario.findById(node.get("cpf").asText()).orElseThrow();
		funcionarioById.setUsuario(node.get("usuario").asText());
		funcionarioById.setNome(node.get("nome").asText());
		funcionarioById.setSenha(node.get("senha").asText());
		funcionarioById.setEmail(node.get("email").asText());
		funcionarioById.setTelefone(node.get("telefone").asText());
		funcionarioById.setGerente(node.get("gerente").asBoolean());
		return funcionario.save(funcionarioById);
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

	@PostMapping("/fromloja")
	public List<Funcionario> getProdutoFromLoja(@RequestBody JsonNode node) {
		return funcionario.getFuncionarioFromLoja(node.get("id").asInt());
	}

	@PostMapping("/outloja")
	public List<Funcionario> getProdutoOutLoja(@RequestBody JsonNode node) {
		return funcionario.getFuncionarioOutLoja(node.get("id").asInt());
	}
}
