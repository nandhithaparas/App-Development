package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.UserLogin;
import com.example.demo.Service.UserLoginService;


@RestController
public class UserController 
{
 @Autowired
 private UserLoginService uls;
 @GetMapping("/getUserLogin")
	public List<UserLogin> getUserLogin(){
		return uls.getUserLogin();
	}
	@GetMapping("/getUserLogin/{id}")
	public Optional<UserLogin> getUserLoginbyId(@PathVariable int id){
		return uls.getUserLoginbyId(id);
	}
	@PutMapping("/putUserLogin/{id}")
	public void putUserLogin(@PathVariable int id,@RequestBody UserLogin ule)
	{
	    ule.setLoginId(id);
		uls.putUserLogin(ule);
	}
	@PostMapping("/postUserLogin")
	public void postUserLogin(@RequestBody UserLogin ule)
	{
		uls.postUserLogin(ule);
	}
	@DeleteMapping("/delUserLogin/{id}")
	public void delUserLogin(@PathVariable int id) {
		uls.delUserLogin(id);
	}
	@GetMapping("/public")
	public String welcome() {
		return "Hello world";
	}
	@GetMapping("/secure")
	public String hello() {
		return "Hello world";
	}

	
}
