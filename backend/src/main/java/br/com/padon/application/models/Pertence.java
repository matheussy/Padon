package br.com.padon.application.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Pertence")
public class Pertence {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int pertenceId;
	private final int produtoId;
	private final int vendaId;
	private double precoTotal;
	private int quantidade;
	private double precoAtual;

	public Pertence(int produtoId, int vendaId) {
		this.produtoId = produtoId;
		this.vendaId = vendaId;
	}

	public Pertence(int produtoId, int vendaId, double precoTotal, int quantidade, double precoAtual) {
		this.produtoId = produtoId;
		this.vendaId = vendaId;
		this.precoTotal = precoTotal;
		this.quantidade = quantidade;
		this.precoAtual = precoAtual;
	}

	public int getPertenceId() {
		return pertenceId;
	}

	public int getProdutoId() {
		return produtoId;
	}

	public int getVendaId() {
		return vendaId;
	}

	public double getPrecoTotal() {
		return precoTotal;
	}

	public void setPrecoTotal(double precoTotal) {
		this.precoTotal = precoTotal;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}

	public double getPrecoAtual() {
		return precoAtual;
	}

	public void setPrecoAtual(double precoAtual) {
		this.precoAtual = precoAtual;
	}
}
