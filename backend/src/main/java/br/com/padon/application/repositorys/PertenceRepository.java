package br.com.padon.application.repositorys;

import br.com.padon.application.models.Pertence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PertenceRepository extends JpaRepository<Pertence, Integer> {

	@Query("select p from Pertence p where p.produtoId = :produtoId and p.vendaId = :vendaId")
	Pertence getPertence(int produtoId, int vendaId);
}
