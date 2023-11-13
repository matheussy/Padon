package br.com.padon.application.dtos;

public record ProdutoDto(
		int produtoId,
		String nome,
		String fabricante,
		String image,
		double codigoDeBarras,
		boolean bloqueado,
		double precoPorQuilo,
		double precoPorUnidade,
		boolean porQuilo,
		double preco
) {
}
