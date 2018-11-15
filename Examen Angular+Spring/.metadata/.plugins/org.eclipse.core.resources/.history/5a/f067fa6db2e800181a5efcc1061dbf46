package com.salesianostriana.rest.security.model;

import java.util.Arrays;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @NoArgsConstructor
public class User implements UserDetails {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -8293520443062484615L;
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return Arrays.asList(new SimpleGrantedAuthority("ROLE_USER")) ;
	}

	@Override
	public String getPassword() {
		// TODO Completa este método
		return null;
		
	}

	@Override
	public String getUsername() {
		// TODO Completa este método
		return null;
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
