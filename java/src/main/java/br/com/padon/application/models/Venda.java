package br.com.padon.application.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "venda")
public class Venda {

    private final int id;
    //TODO Date
    private String status;
    private double valorTotal;
    private int comanda;
    //TODO Pertence de produto e venda


    public Venda(int id) {
        this.id = id;
    }
}
