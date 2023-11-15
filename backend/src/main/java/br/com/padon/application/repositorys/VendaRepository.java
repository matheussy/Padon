package br.com.padon.application.repositorys;

import br.com.padon.application.models.Venda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface VendaRepository extends JpaRepository<Venda, Integer> {

	@Query("select v from Venda v where v.dataVenda >= :dtinicial and v.dataVenda <= :dtfinal and v.statusVenda = false")
	List<Venda> getByDate(Date dtinicial, Date dtfinal);
}
