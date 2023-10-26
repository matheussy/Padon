package br.com.padon.application.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "Loja")
public class Loja {

    @Column(name = "LojaId")
    private final int id;

    @Column(name = "Nome")
    private String nome;

    @Column(name = "Endereco")
    private String endereco;


    public Loja(int id) {
        this.id = id;
    }
}
