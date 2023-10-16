package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.UserLogin;
import com.example.demo.Repository.UserLoginRepo;

@Service
public class UserLoginService {
	@Autowired
	private UserLoginRepo userLoginRepo;
	public List<UserLogin> getUserLogin(){
		return userLoginRepo.findAll();
	}
	public Optional<UserLogin> getUserLoginbyId(int id){
		return userLoginRepo.findById(id);
	}
	public UserLogin putUserLogin(UserLogin ulr) {
		return userLoginRepo.save(ulr);
	}
	public void postUserLogin(UserLogin ulr) {
		userLoginRepo.save(ulr);
	}
	public void delUserLogin(int id) {
		userLoginRepo.deleteById(id);
	}

}
