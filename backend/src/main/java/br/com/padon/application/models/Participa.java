package br.com.padon.application.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Participa")
public class Participa {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int participaId;
	private int categoriaId;
	private int produtoId;

	public Participa() {
	}

	public Participa(int produtoId, int categoriaId) {
		this.produtoId = produtoId;
		this.categoriaId = categoriaId;
	}

	public int getParticipaId() {
		return participaId;
	}

	public void setParticipaId(int participaId) {
		this.participaId = participaId;
	}

	public int getCategoriaId() {
		return categoriaId;
	}

	public void setCategoriaId(int categoriaId) {
		this.categoriaId = categoriaId;
	}

	public int getProdutoId() {
		return produtoId;
	}

	public void setProdutoId(int produtoId) {
		this.produtoId = produtoId;
	}
}
