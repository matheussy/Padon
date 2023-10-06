package br.com.padon.application.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "produto")
public class Loja {

    private final int id;
    private String nome;
    private String endereco;
    //TODO Contem produtos


    public Loja(int id) {
        this.id = id;
    }
}
