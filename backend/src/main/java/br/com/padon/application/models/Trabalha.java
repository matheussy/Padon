package br.com.padon.application.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Participa")
public class Trabalha {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int participaId;
	private final int lojaId;
	private final String cpf;

	public Trabalha(int lojaId, String cpf) {
		this.lojaId = lojaId;
		this.cpf = cpf;
	}

	public int getParticipaId() {
		return participaId;
	}

	public int getLojaId() {
		return lojaId;
	}

	public String getCpf() {
		return cpf;
	}
}
