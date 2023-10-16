package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Profile;
import com.example.demo.Repository.ProfileRepo;

import jakarta.transaction.Transactional;

@Service
public class ProfileService {
	@Autowired
    private  ProfileRepo profileRepository;

    public List<Profile> getAllProfile() {
        return profileRepository.findAll();
    }

    public Optional<Profile> findByEmail(String email) {
        return profileRepository.findByEmail(email);
    }

    public Profile createProfile(Profile profile) {
        return profileRepository.save(profile);
    }

    public Profile updateProfile(String email, Profile updatedProfile) {
        Optional<Profile> existingProfileOptional = profileRepository.findByEmail(email);

        if (existingProfileOptional.isPresent()) {
            Profile existingProfile = existingProfileOptional.get();

            existingProfile.setUrl(updatedProfile.getUrl());
            existingProfile.setDescription(updatedProfile.getDescription());
            existingProfile.setEmail(updatedProfile.getEmail());
            existingProfile.setAbout(updatedProfile.getAbout());

            return profileRepository.save(existingProfile);
        } else {
            return null; 
        }
    }
@Transactional
    public void deleteProfile(String email) {
        profileRepository.deleteByEmail(email);
    }
}