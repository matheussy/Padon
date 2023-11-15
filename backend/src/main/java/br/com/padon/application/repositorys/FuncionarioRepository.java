package br.com.padon.application.repositorys;

import br.com.padon.application.models.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FuncionarioRepository extends JpaRepository<Funcionario, String> {

	@Query("select f from Funcionario f, Trabalha r where r.lojaId = :lojaId and f.cpf = r.cpf")
	List<Funcionario> getFuncionarioFromLoja(int lojaId);

	@Query("select f from Funcionario f where (select count(*) from Trabalha r where r.lojaId = :lojaId and f.cpf = r.cpf) = 0")
	List<Funcionario> getFuncionarioOutLoja(int lojaId);

	@Query("select f from Funcionario f where f.usuario = :usuario")
	Funcionario findByUsuario(String usuario);
}
