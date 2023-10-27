package br.com.padon.application.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Fornecedor")
public class Fornecedor {

	@Id
	private final int fornecedorId;
	private String endereco;
	private String contato;
	private String telefone;
	private String nome;

	public Fornecedor(int fornecedorId) {
		this.fornecedorId = fornecedorId;
	}

	public Fornecedor(int fornecedorId, String endereco, String contato, String telefone, String nome) {
		this.fornecedorId = fornecedorId;
		this.endereco = endereco;
		this.contato = contato;
		this.telefone = telefone;
		this.nome = nome;
	}

	public int getFornecedorId() {
		return fornecedorId;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getContato() {
		return contato;
	}

	public void setContato(String contato) {
		this.contato = contato;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
}
