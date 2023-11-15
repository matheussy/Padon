package br.com.padon.application.dtos;

import java.util.Date;
import java.util.List;

public record RelatorioDto(
		int vendaId,
		Date dataVenda,
		boolean statusVenda,
		double valorTotal,
		int comanda,
		List<ProdutoVendaDto> produtos
) {
}
