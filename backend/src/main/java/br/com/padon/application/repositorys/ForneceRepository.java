package br.com.padon.application.repositorys;

import br.com.padon.application.models.Fornece;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ForneceRepository extends JpaRepository<Fornece, Integer> {

	@Query("select f from Fornece f where f.produtoId = :produtoId and f.fornecedorId = :fornecedorId")
	Fornece getFornece(@Param("produtoId") int produtoId, @Param("fornecedorId") int fornecedorId);
}
