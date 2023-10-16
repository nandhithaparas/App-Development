package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.contactentity;
import com.example.demo.Service.contactservice;

import jakarta.transaction.Transactional;


@RestController
@RequestMapping(path="/contact")
public class ContactController {
	@Autowired
	private contactservice conservice;
	  @GetMapping("/get")
	    public List<contactentity> getAllcontact() {
	        return conservice.getAllcontact();
	    }
	    @GetMapping("/{email}")
	    public contactentity getByEmail(@PathVariable String email) {
	        return conservice.getByEmail(email);
	    }
	    @Transactional
	    @PostMapping("/post")
	    public contactentity createUser(@RequestBody contactentity contact) {
	    	return conservice.createcontact(contact);
	    }


}
