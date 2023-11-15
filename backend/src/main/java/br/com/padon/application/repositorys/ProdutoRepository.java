package br.com.padon.application.repositorys;

import br.com.padon.application.models.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;
import java.util.List;

public interface ProdutoRepository extends JpaRepository<Produto, Integer> {

	@Query("select p from Produto p, Participa r where r.categoriaId = :categoriaId and p.produtoId = r.produtoId")
	List<Produto> getProdutosFromCategoria(int categoriaId);

	@Query("select p from Produto p where (select count(*) from Participa r where r.categoriaId = :categoriaId and p.produtoId = r.produtoId) = 0")
	List<Produto> getProdutosOutCategoria(int categoriaId);

	@Query("select p from Produto p, Fornece r where r.fornecedorId = :fornecedorId and p.produtoId = r.produtoId")
	List<Produto> getProdutosFromFornecedor(int fornecedorId);

	@Query("select p from Produto p where (select count(*) from Fornece r where r.fornecedorId = :fornecedorId and p.produtoId = r.produtoId) = 0")
	List<Produto> getProdutosOutFornecedor(int fornecedorId);

	@Query("select p from Produto p, Pertence r where r.vendaId = :vendaId and p.produtoId = r.produtoId")
	List<Produto> getProdutosFromVenda(int vendaId);

	@Query("select p from Produto p where (select count(*) from Pertence r where r.vendaId = :vendaId and p.produtoId = r.produtoId) = 0")
	List<Produto> getProdutosOutVenda(int vendaId);

	@Query("select p from Produto p, Conter r where r.lojaId = :lojaId and p.produtoId = r.produtoId")
    List<Produto> getProdutosFromLoja(int lojaId);

	@Query("select p from Produto p where (select count(*) from Conter r where r.lojaId = :lojaId and p.produtoId = r.produtoId) = 0")
	List<Produto> getProdutosOutLoja(int lojaId);
}
