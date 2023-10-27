package br.com.padon.application.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Participa")
public class Trabalha {

	@Id
	private final int lojaId;
	@Id
	private final String cpf;

	public Trabalha(int lojaId, String cpf) {
		this.lojaId = lojaId;
		this.cpf = cpf;
	}

	public int getLojaId() {
		return lojaId;
	}

	public String getCpf() {
		return cpf;
	}
}
