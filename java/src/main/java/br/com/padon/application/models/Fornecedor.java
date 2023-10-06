package br.com.padon.application.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "produto")
public class Fornecedor {

    private final int id;
    private String nome;
    private String contato;
    private String endereco;
    private String telefone;
    //TODO Fornece produtos


    public Fornecedor(int id) {
        this.id = id;
    }
}
