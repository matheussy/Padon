package br.com.padon.application.dtos;

public record ProdutoVendaDto(
		int produtoId,
		String nome,
		String fabricante,
		String image,
		double codigoDeBarras,
		boolean bloqueado,
		double precoPorQuilo,
		double precoPorUnidade,
		boolean porQuilo,
		double precoTotal,
		int quantidade,
		double precoAtual
) {
}
