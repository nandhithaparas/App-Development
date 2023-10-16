package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.UserRegister;

public interface UserRegisterRepo extends JpaRepository<UserRegister, Integer> {

}
