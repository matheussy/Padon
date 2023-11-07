package br.com.padon.application.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Pertence")
public class Pertence {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int pertenceId;
	private int produtoId;
	private int vendaId;
	private double precoTotal;
	private int quantidade;
	private double precoAtual;

	public Pertence() {}

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

	public void setPertenceId(int pertenceId) {
		this.pertenceId = pertenceId;
	}

	public int getProdutoId() {
		return produtoId;
	}

	public void setProdutoId(int produtoId) {
		this.produtoId = produtoId;
	}

	public int getVendaId() {
		return vendaId;
	}

	public void setVendaId(int vendaId) {
		this.vendaId = vendaId;
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
