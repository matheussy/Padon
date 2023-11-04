package br.com.padon.application.controllers;

import br.com.padon.application.models.Fornecedor;
import br.com.padon.application.repositorys.FornecedorRepository;
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
	public void createFornecedor(@RequestParam(name = "endereco") String endereco, @RequestParam(name = "contato") String contato, @RequestParam(name = "telefone") String telefone, @RequestParam(name = "nome") String nome) {
		fornecedor.save(new Fornecedor(endereco, contato, telefone, nome));
	}

	@GetMapping("/get")
	public List<Fornecedor> getAllFornecedores() {
		return fornecedor.findAll();
	}

	@PostMapping("/save")
	public void saveFornecedor(@RequestParam(name = "id") int fornecedorId, @RequestParam(name = "endereco") String endereco, @RequestParam(name = "contato") String contato, @RequestParam(name = "telefone") String telefone, @RequestParam(name = "nome") String nome) {
		Fornecedor fornecedorById = fornecedor.findById(fornecedorId).orElseThrow();
		fornecedorById.setEndereco(endereco);
		fornecedorById.setContato(contato);
		fornecedorById.setTelefone(telefone);
		fornecedorById.setNome(nome);
		fornecedor.save(fornecedorById);
	}

	@PostMapping("/byid")
	public Optional<Fornecedor> getFornecedor(@RequestParam(name = "id") int fornecedorId) {
		return fornecedor.findById(fornecedorId);
	}

	@PostMapping("/delete")
	public void deleteFornecedor(@RequestParam(name = "id") int fornecedorId) {
		fornecedor.deleteById(fornecedorId);
	}
}
