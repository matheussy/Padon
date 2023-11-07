package br.com.padon.application.repositorys;

import br.com.padon.application.models.Participa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ParticipaRepository extends JpaRepository<Participa, Integer> {

	@Query("select p from Participa p where p.produtoId = :produtoId and p.categoriaId = :categoriaId")
	Participa getParticipa(@Param("produtoId") int produtoId, @Param("categoriaId") int categoriaId);
}
