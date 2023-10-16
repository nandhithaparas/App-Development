package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.UserRegister;
import com.example.demo.Repository.UserRegisterRepo;

@Service
public class UserRegisterService {
	@Autowired
	private UserRegisterRepo userRegisterRepo;
	public List<UserRegister> getUserRegister(){
		return userRegisterRepo.findAll();
	}
	public Optional<UserRegister> getUserRegisterbyId(int id)
	{
		return userRegisterRepo.findById(id);
	}
	public void postUserRegister(UserRegister ur) {
		userRegisterRepo.save(ur);
	}
	public UserRegister putUserRegister(UserRegister ur) {
		return userRegisterRepo.save(ur);
	}
	public void deleteUserRegister(int id) {
		userRegisterRepo.deleteById(id);
	}
	
}
