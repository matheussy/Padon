package br.com.padon.application.controllers;

import br.com.padon.application.security.TokenService;
import br.com.padon.application.models.Funcionario;
import br.com.padon.application.repositorys.FuncionarioRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;


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
		var usernamePassword = new UsernamePasswordAuthenticationToken(node.get("usuario"), node.get("senha"));
		Authentication auth = authManager.authenticate(usernamePassword);
		String token = tokenService.generateToken((Funcionario) auth.getPrincipal());
		HashMap<String, String> map = new HashMap<>();
		map.put("token", token);
		return map;
	}
}

