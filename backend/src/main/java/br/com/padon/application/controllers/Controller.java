package br.com.padon.application.controllers;

import br.com.padon.application.models.Loja;
import br.com.padon.application.repositorys.LojaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

	@Autowired
	private LojaRepository loja;

	@GetMapping("/aff")
	private String aff() {
		Loja loja1 = new Loja("Loja 1 né pai", "Uma rua atras daquela rua la");
		Loja loja2 = new Loja("Loja 2 grazadeus", "Aquela rua la");
		loja.save(loja1);
		loja.save(loja2);
		StringBuilder text = new StringBuilder();
		loja.findAll().stream().map(Loja::getNome).forEach(s -> text.append(s).append(" | "));
		String ret = text.toString();
		return ret.trim().substring(0, ret.length() - 2).trim();
	}
}