package br.com.padon.application.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "funcionario")
public class Funcionario {

    private final String cpf;
    private String nome;
    private String usuario;
    private String senha;
    private String email;
    private String telefone;
    private boolean gerente;
    //TODO Trabalha na loja


    public Funcionario(String cpf) {
        this.cpf = cpf;
    }
}
