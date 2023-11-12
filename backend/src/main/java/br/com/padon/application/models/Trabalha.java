package br.com.padon.application.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Trabalha")
public class Trabalha {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int trabalhaId;
	private int lojaId;
	private String cpf;

	public Trabalha () {

	}

	public Trabalha(int lojaId, String cpf) {
		this.lojaId = lojaId;
		this.cpf = cpf;
	}

	public int getTrabalhaId() {
		return trabalhaId;
	}

	public void setTrabalhaId(int trabalhaId) {
		this.trabalhaId = trabalhaId;
	}

	public int getLojaId() {
		return lojaId;
	}

	public void setLojaId(int lojaId) {
		this.lojaId = lojaId;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
}
