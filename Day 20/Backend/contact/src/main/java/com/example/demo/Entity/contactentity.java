package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class contactentity {
	@Id
	private String email;
	private String name;
	private String msg;
}
	