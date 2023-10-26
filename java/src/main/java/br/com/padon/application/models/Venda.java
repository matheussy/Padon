package br.com.padon.application.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.util.Date;

@Entity
@Table(name = "Venda")
public class Venda {

	private final int vendaId;
	private Date dataVenda;
	private double valorTotal;
	private String statusVenda;
	private int comanda;

	public Venda(int vendaId) {
		this.vendaId = vendaId;
	}

	public Venda(int vendaId, Date dataVenda, String statusVenda, double valorTotal, int comanda) {
		this.vendaId = vendaId;
		this.dataVenda = dataVenda;
		this.statusVenda = statusVenda;
		this.valorTotal = valorTotal;
		this.comanda = comanda;
	}

	public int getVendaId() {
		return vendaId;
	}

	public Date getDataVenda() {
		return dataVenda;
	}

	public void setDataVenda(Date dataVenda) {
		this.dataVenda = dataVenda;
	}

	public String getStatusVenda() {
		return statusVenda;
	}

	public void setStatusVenda(String statusVenda) {
		this.statusVenda = statusVenda;
	}

	public double getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(double valorTotal) {
		this.valorTotal = valorTotal;
	}

	public int getComanda() {
		return comanda;
	}

	public void setComanda(int comanda) {
		this.comanda = comanda;
	}
}
