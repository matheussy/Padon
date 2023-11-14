package br.com.padon.application.repositorys;

import br.com.padon.application.models.Conter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ConterRepository extends JpaRepository<Conter, Integer> {

	@Query("select c from Conter c where c.produtoId = :produtoId and c.lojaId = :lojaId")
	Conter getConter(int produtoId, int lojaId);
}
