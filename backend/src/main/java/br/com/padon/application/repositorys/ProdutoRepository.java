package br.com.padon.application.repositorys;

import br.com.padon.application.models.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProdutoRepository extends JpaRepository<Produto, Integer> {

	@Query("select p from Produto p, Participa r where r.categoriaId = :categoriaId and p.produtoId = r.produtoId")
	List<Produto> getProdutosFromCategoria(int categoriaId);

	@Query("select p from Produto p, Participa r where r.categoriaId != :categoriaId and p.produtoId = r.produtoId")
	List<Produto> getProdutosOutCategoria(int categoriaId);

	@Query("select p from Produto p, Participa r where r.fornecedorId = :fornecedorId and p.produtoId = r.produtoId")
	List<Produto> getProdutosFromFornecedor(int fornecedorId);

	@Query("select p from Produto p, Participa r where r.fornecedorId != :fornecedorId and p.produtoId = r.produtoId")
	List<Produto> getProdutosOutFornecedor(int fornecedorId);
}
