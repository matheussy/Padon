package br.com.padon.application.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "Participa")
public class Participa {

	private final int categoriaId;
	private final int produtoId;

	public Participa(int produtoId, int categoriaId) {
		this.produtoId = produtoId;
		this.categoriaId = categoriaId;
	}

	public int getCategoriaId() {
		return categoriaId;
	}

	public int getProdutoId() {
		return produtoId;
	}
}
