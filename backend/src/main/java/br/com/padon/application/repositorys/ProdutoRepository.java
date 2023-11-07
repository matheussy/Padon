package br.com.padon.application.repositorys;

import br.com.padon.application.models.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProdutoRepository extends JpaRepository<Produto, Integer> {

//	@Query("")
//	List<Produto> getProdutosFromCategoria(int produtoId, int categoriaId);
//
//	@Query("")
//	List<Produto> getProdutosOutCategoria(int produtoId, int categoriaId);
}
