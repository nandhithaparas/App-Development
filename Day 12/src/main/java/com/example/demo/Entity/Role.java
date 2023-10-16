package com.example.demo.Entity;

import static com.example.demo.Entity.Permission.ADMIN_READ;
import static com.example.demo.Entity.Permission.ADMIN_CREATE;
import static com.example.demo.Entity.Permission.ADMIN_UPDATE;
import static com.example.demo.Entity.Permission.ADMIN_DELETE;
import static com.example.demo.Entity.Permission.USER_READ;
import static com.example.demo.Entity.Permission.USER_CREATE;
import static com.example.demo.Entity.Permission.USER_UPDATE;
import static com.example.demo.Entity.Permission.USER_DELETE;


import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import lombok.Getter;

public enum Role {
	 ADMIN(Set.of(
	            ADMIN_READ,
	            ADMIN_CREATE,
	            ADMIN_UPDATE,
	            ADMIN_DELETE,
	            USER_READ,
	            USER_CREATE,
	            USER_UPDATE,
	            USER_DELETE)),
	    CUSTOMER(Set.of(
	    		USER_READ,
	            USER_CREATE,
	            USER_UPDATE,
	            USER_DELETE));

	    @Getter
	    private final Set<Permission> permissions;

	    public List<SimpleGrantedAuthority> getAuthority() {
	        List<SimpleGrantedAuthority> authorities = new ArrayList<>();

	        for (Permission permission : getPermissions()) {
	            authorities.add(new SimpleGrantedAuthority(permission.getPermission()));
	        }

	        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
	        return authorities;
	    }

}
