package com.example.biblioteca_API_backend.service;

import com.example.biblioteca_API_backend.entities.Author;
import com.example.biblioteca_API_backend.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorService {
    @Autowired
    private AuthorRepository authorRepository;

    public List<Author> findAll() {
        return authorRepository.findAll();
    }
}
