package br.com.padon.application.security;

import br.com.padon.application.repositorys.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class LoginService implements UserDetailsService {

	@Autowired
	private FuncionarioRepository funcionario;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		return funcionario.findByUsuario(username);
	}
}
