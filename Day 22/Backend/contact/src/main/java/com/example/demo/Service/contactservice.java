package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.contactentity;
import com.example.demo.Repository.contactRepository;

@Service
public class contactservice {
	@Autowired
	private contactRepository contactrepo;

	public List<contactentity> getAllcontact() {
        return contactrepo.findAll();
    }	
    public contactentity getByEmail(String email) {
        Optional<contactentity> contactOptional = contactrepo.findById(email);
        return contactOptional.orElse(null);
    }
    
    public contactentity createcontact(contactentity contact) {
        return contactrepo.save(contact);
    }
    
//    public void deleteUser(String email) {
//        contactrepo.deleteById(email);
//    }
}
