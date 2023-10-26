package br.com.padon.application.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "Produto")
public class Produto {

    @Column(name = "ProdutoId")
    private final int id;

    @Column(name = "Nome")
    private String nome;

    @Column(name = "Fabricante")
    private String fabricante;

    @Column(name = "Imagem")
    private byte[] imagem;

    @Column(name = "CodigoDeBarras")
    private double codigoDeBarras;

    @Column(name = "Bloqueado")
    private boolean bloquado;

    @Column(name = "PrecoPorQuilo")
    private boolean precoPorQuilo;

    @Column(name = "PrecoUnidade")
    private boolean precoUnidade;

    @Column(name = "PorQuilo")
    private boolean porQuilo;


    public Produto(int id) {
        this.id = id;
    }
}
