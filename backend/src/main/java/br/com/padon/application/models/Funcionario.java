package br.com.padon.application.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "funcionario")
public class Funcionario implements UserDetails {

	@Id
	private String cpf;
	private String usuario;
	private String nome;
	private String senha;
	private String email;
	private String telefone;
	private boolean gerente;

	public Funcionario() {
	}

	public Funcionario(String cpf, String usuario, String nome, String senha, String email, String telefone, boolean gerente) {
		this.cpf = cpf;
		this.usuario = usuario;
		this.nome = nome;
		this.senha = senha;
		this.email = email;
		this.telefone = telefone;
		this.gerente = gerente;
	}

	public String getCpf() {
		return cpf;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public boolean isGerente() {
		return gerente;
	}

	public void setGerente(boolean gerente) {
		this.gerente = gerente;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<SimpleGrantedAuthority> ret = new ArrayList<>(List.of(new SimpleGrantedAuthority("ROLE_USER")));
		if (isGerente()) {
			ret.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
		}
		return ret;
	}

	@Override
	public String getPassword() {
		return getSenha();
	}

	@Override
	public String getUsername() {
		return getNome();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}
