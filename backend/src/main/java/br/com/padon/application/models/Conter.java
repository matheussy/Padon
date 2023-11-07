package br.com.padon.application.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Conter")
public class Conter {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int conterId;
	private int produtoId;
	private int lojaId;
	private int estoque;
	private int quantidadeMinima;

	public Conter() {}

	public Conter(int produtoId, int lojaId, int estoque, int quantidadeMinima) {
		this.produtoId = produtoId;
		this.lojaId = lojaId;
		this.estoque = estoque;
		this.quantidadeMinima = quantidadeMinima;
	}

	public int getConterId() {
		return conterId;
	}

	public void setConterId(int conterId) {
		this.conterId = conterId;
	}

	public int getProdutoId() {
		return produtoId;
	}

	public void setProdutoId(int produtoId) {
		this.produtoId = produtoId;
	}

	public int getLojaId() {
		return lojaId;
	}

	public void setLojaId(int lojaId) {
		this.lojaId = lojaId;
	}

	public int getEstoque() {
		return estoque;
	}

	public void setEstoque(int estoque) {
		this.estoque = estoque;
	}

	public int getQuantidadeMinima() {
		return quantidadeMinima;
	}

	public void setQuantidadeMinima(int quantidadeMinima) {
		this.quantidadeMinima = quantidadeMinima;
	}
}
