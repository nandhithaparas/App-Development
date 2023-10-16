package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/guides")
public class GuideController {
	@GetMapping("/getguides")
	public String getguide() {
		return "guides";
	}

}
