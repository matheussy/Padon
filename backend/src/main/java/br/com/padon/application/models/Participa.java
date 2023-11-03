package br.com.padon.application.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Participa")
public class Participa {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int participaId;
	private final int categoriaId;
	private final int produtoId;

	public Participa(int produtoId, int categoriaId) {
		this.produtoId = produtoId;
		this.categoriaId = categoriaId;
	}

	public int getParticipaId() {
		return participaId;
	}

	public int getCategoriaId() {
		return categoriaId;
	}

	public int getProdutoId() {
		return produtoId;
	}
}
