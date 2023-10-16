package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.UserLogin;

public interface UserLoginRepo extends JpaRepository<UserLogin, Integer>{

}
