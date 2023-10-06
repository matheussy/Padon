package br.com.padon.application.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "produto")
public class Produto {

    private final int id;
    private String nome;
    private String fabricante;
    private double codigoDeBarras;
    private boolean bloquado;
    //TODO Preco por un ou kg
    //TODO Tem uma categoria


    public Produto(int id) {
        this.id = id;
    }
}
