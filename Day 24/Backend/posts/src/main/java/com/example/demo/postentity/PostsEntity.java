package com.example.demo.postentity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
public class PostsEntity {
	 private Long imageId;
	    private String imageName;
	    private String imageDescription;

}