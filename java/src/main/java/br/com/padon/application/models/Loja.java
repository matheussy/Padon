package br.com.padon.application.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "Loja")
public class Loja {

	private final int lojaId;
	private String nome;
	private String endereco;

	public Loja(int lojaId) {
		this.lojaId = lojaId;
	}

	public Loja(int lojaId, String nome, String endereco) {
		this.lojaId = lojaId;
		this.nome = nome;
		this.endereco = endereco;
	}

	public int getLojaId() {
		return lojaId;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
}
