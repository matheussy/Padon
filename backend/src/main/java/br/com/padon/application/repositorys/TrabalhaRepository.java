package br.com.padon.application.repositorys;

import br.com.padon.application.models.Trabalha;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TrabalhaRepository extends JpaRepository<Trabalha, Integer> {

	@Query("select t from Trabalha t where t.lojaId = :lojaId and t.cpf = :cpf")
	Trabalha getTrabalha(int lojaId, String cpf);
}
