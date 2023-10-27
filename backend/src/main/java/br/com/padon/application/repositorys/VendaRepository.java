package br.com.padon.application.repositorys;

import br.com.padon.application.models.Venda;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VendaRepository extends JpaRepository<Venda, Integer> {

}
