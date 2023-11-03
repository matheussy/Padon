package br.com.padon.application.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Fornece")
public class Fornece {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int forneceId;
	private final int fornecedorId;
	private final int produtoId;
	private double preco;

	public Fornece(int fornecedorId, int produtoId) {
		this.fornecedorId = fornecedorId;
		this.produtoId = produtoId;
	}

	public Fornece(int fornecedorId, int produtoId, double preco) {
		this.fornecedorId = fornecedorId;
		this.produtoId = produtoId;
		this.preco = preco;
	}

	public int getForneceId() {
		return forneceId;
	}

	public int getFornecedorId() {
		return fornecedorId;
	}

	public int getProdutoId() {
		return produtoId;
	}

	public double getPreco() {
		return preco;
	}

	public void setPreco(double preco) {
		this.preco = preco;
	}
}
