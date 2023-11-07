package br.com.padon.application.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Produto")
public class Produto {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int produtoId;
	private String nome;
	private String fabricante;
	private byte[] imagem;
	private double codigoDeBarras;
	private boolean bloqueado;
	private double precoPorQuilo;
	private double precoPorUnidade;
	private boolean porQuilo;

	public Produto() {}

	public Produto(String nome, String fabricante, byte[] imagem, double codigoDeBarras, boolean bloqueado, double precoPorQuilo, double precoPorUnidade, boolean porQuilo) {
		this.nome = nome;
		this.fabricante = fabricante;
		this.imagem = imagem;
		this.codigoDeBarras = codigoDeBarras;
		this.bloqueado = bloqueado;
		this.precoPorQuilo = precoPorQuilo;
		this.precoPorUnidade = precoPorUnidade;
		this.porQuilo = porQuilo;
	}

	public int getProdutoId() {
		return produtoId;
	}

	public void setProdutoId(int produtoId) {
		this.produtoId = produtoId;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getFabricante() {
		return fabricante;
	}

	public void setFabricante(String fabricante) {
		this.fabricante = fabricante;
	}

	public byte[] getImagem() {
		return imagem;
	}

	public void setImagem(byte[] imagem) {
		this.imagem = imagem;
	}

	public double getCodigoDeBarras() {
		return codigoDeBarras;
	}

	public void setCodigoDeBarras(double codigoDeBarras) {
		this.codigoDeBarras = codigoDeBarras;
	}

	public boolean isBloqueado() {
		return bloqueado;
	}

	public void setBloqueado(boolean bloqueado) {
		this.bloqueado = bloqueado;
	}

	public double getPrecoPorQuilo() {
		return precoPorQuilo;
	}

	public void setPrecoPorQuilo(double precoPorQuilo) {
		this.precoPorQuilo = precoPorQuilo;
	}

	public double getPrecoPorUnidade() {
		return precoPorUnidade;
	}

	public void setPrecoPorUnidade(double precoPorUnidade) {
		this.precoPorUnidade = precoPorUnidade;
	}

	public boolean isPorQuilo() {
		return porQuilo;
	}

	public void setPorQuilo(boolean porQuilo) {
		this.porQuilo = porQuilo;
	}
}
