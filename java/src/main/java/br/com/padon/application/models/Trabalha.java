package br.com.padon.application.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "Participa")
public class Trabalha {

	private final int lojaId;
	private final int funcionarioId;

	public Trabalha(int lojaId, int funcionarioId) {
		this.lojaId = lojaId;
		this.funcionarioId = funcionarioId;
	}

	public int getLojaId() {
		return lojaId;
	}

	public int getFuncionarioId() {
		return funcionarioId;
	}
}
