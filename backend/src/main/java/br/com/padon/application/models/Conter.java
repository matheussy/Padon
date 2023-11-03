package br.com.padon.application.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Conter")
public class Conter {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int conterId;
	private final int produtoId;
	private final int lojaId;
	private int estoque;
	private int quantidadeMinima;

	public Conter(int produtoId, int lojaId) {
		this.produtoId = produtoId;
		this.lojaId = lojaId;
	}

	public Conter(int produtoId, int lojaId, int estoque, int quantidadeMinima) {
		this.produtoId = produtoId;
		this.lojaId = lojaId;
		this.estoque = estoque;
		this.quantidadeMinima = quantidadeMinima;
	}

	public int getConterId() {
		return conterId;
	}

	public int getProdutoId() {
		return produtoId;
	}

	public int getLojaId() {
		return lojaId;
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
