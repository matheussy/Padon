package br.com.padon.application.controllers;

import br.com.padon.application.models.Funcionario;
import br.com.padon.application.repositorys.FuncionarioRepository;
import br.com.padon.application.security.TokenService;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin
@RestController
public class LoginController {

	@Autowired
	private FuncionarioRepository funcionario;
	@Autowired
	private AuthenticationManager authManager;
	@Autowired
	private TokenService tokenService;

	@PostMapping("/login")
	public Map<String, String> login(@RequestBody JsonNode node) {
		var usernamePassword = new UsernamePasswordAuthenticationToken(node.get("usuario").asText(), node.get("senha").asText());
		Authentication auth = authManager.authenticate(usernamePassword);
		Funcionario user = (Funcionario) auth.getPrincipal();
		String token = tokenService.generateToken(user);
		HashMap<String, String> map = new HashMap<>();
		map.put("token", token);
		map.put("gerente", String.valueOf(user.isGerente()));
		return map;
	}
}

