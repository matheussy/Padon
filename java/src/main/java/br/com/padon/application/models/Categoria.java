package br.com.padon.application.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "categoria")
public class Categoria {

    private final int id;
    private String nome;
    private String descricao;


    public Categoria(int id) {
        this.id = id;
    }
}
