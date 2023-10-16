package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Profile;

public interface ProfileRepo extends JpaRepository<Profile, Integer> {
	
	Optional<Profile> findByEmail(String email);
	Optional<Profile> deleteByEmail(String email);
	
}
