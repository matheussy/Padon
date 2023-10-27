package br.com.padon.application.controllers;

import br.com.padon.application.models.Loja;
import br.com.padon.application.repositorys.LojaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class Controller {

	@Autowired
	private LojaRepository loja;

	@GetMapping("/aff")
	private Map<Integer, String> aff() {
		Loja loja1 = new Loja("Loja 1 né pai", "Uma rua atras daquela rua la");
		Loja loja2 = new Loja("Loja 2 grazadeus", "Aquela rua la");
		loja.save(loja1);
		loja.save(loja2);
		Map<Integer, String> ret = new HashMap<>();
		loja.findAll().forEach(l -> ret.put(l.getLojaId(), l.getNome()));
		return ret;
	}
}