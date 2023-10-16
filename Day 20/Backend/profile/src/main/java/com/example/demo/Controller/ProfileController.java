package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Profile;
import com.example.demo.Service.ProfileService;


@RestController
@RequestMapping(path="/profile")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @GetMapping("/get/prof")
    public List<Profile> getAllProfile()
    {
        return profileService.getAllProfile();
    }

    @GetMapping("/{email}")
    public Optional<Profile> findByEmail(@PathVariable String email) {
        return profileService.findByEmail(email);
    }

    @PostMapping("/prof/post")
    public Profile createCourse(@RequestBody Profile course) {
        return profileService.createProfile(course);
    }

    @PutMapping("/{email}")
    public Profile updateProfile(@PathVariable String email, @RequestBody Profile updatedprofile) {
        return profileService.updateProfile(email, updatedprofile);
    }

    @DeleteMapping("/det/{email}")
    public void deleteProfile(@PathVariable String email) {
    	profileService.deleteProfile(email);
    }
}
