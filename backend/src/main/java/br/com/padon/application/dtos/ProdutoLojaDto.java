package br.com.padon.application.dtos;

public record ProdutoLojaDto(
		int produtoId,
		String nome,
		String fabricante,
		String image,
		double codigoDeBarras,
		boolean bloqueado,
		double precoPorQuilo,
		double precoPorUnidade,
		boolean porQuilo,
		int estoque,
		int quantidadeMinima
) {
}
