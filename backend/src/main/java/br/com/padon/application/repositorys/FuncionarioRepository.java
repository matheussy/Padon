package br.com.padon.application.repositorys;

import br.com.padon.application.models.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FuncionarioRepository extends JpaRepository<Funcionario, String> {

}
