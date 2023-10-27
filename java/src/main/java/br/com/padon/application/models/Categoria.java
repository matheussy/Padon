package br.com.padon.application.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Categoria")
public class Categoria {

	@Id
	private final int categoriaId;
	private String nome;
	private String descricao;


	public Categoria(int categoriaId) {
		this.categoriaId = categoriaId;
	}

	public Categoria(int categoriaId, String nome, String descricao) {
		this.categoriaId = categoriaId;
		this.nome = nome;
		this.descricao = descricao;
	}

	public int getCategoriaId() {
		return categoriaId;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
}
