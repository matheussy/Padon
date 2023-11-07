package br.com.padon.application.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Fornece")
public class Fornece {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int forneceId;
	private int fornecedorId;
	private int produtoId;
	private double preco;

	public Fornece() {}

	public Fornece(int fornecedorId, int produtoId, double preco) {
		this.fornecedorId = fornecedorId;
		this.produtoId = produtoId;
		this.preco = preco;
	}

	public int getForneceId() {
		return forneceId;
	}

	public void setForneceId(int forneceId) {
		this.forneceId = forneceId;
	}

	public int getFornecedorId() {
		return fornecedorId;
	}

	public void setFornecedorId(int fornecedorId) {
		this.fornecedorId = fornecedorId;
	}

	public int getProdutoId() {
		return produtoId;
	}

	public void setProdutoId(int produtoId) {
		this.produtoId = produtoId;
	}

	public double getPreco() {
		return preco;
	}

	public void setPreco(double preco) {
		this.preco = preco;
	}
}
