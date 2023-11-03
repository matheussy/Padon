package br.com.padon.application.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Participa")
public class Participa {

	@Id
	private final int categoriaId;
	@Id
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
