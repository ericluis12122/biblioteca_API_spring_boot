package com.example.biblioteca_API_backend.controller;

import com.example.biblioteca_API_backend.entities.Author;
import com.example.biblioteca_API_backend.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RequestMapping("/api/authors")
@RestController
public class AuthorController {
    @Autowired
    private AuthorService authorService;

    @GetMapping
    public List<Author> getAllBooks() {
        return authorService.findAll();
    }
}
