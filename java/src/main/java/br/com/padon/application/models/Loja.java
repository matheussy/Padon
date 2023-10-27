package br.com.padon.application.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Loja")
public class Loja {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int lojaId;
	private String nome;
	private String endereco;

	public Loja(String nome, String endereco) {
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
