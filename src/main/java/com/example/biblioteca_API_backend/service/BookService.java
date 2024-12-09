package com.example.biblioteca_API_backend.service;

import com.example.biblioteca_API_backend.entities.Book;
import com.example.biblioteca_API_backend.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public List<Book> findAll() { return bookRepository.findAll(); }

    public Optional<Book> findById(Long id) { return bookRepository.findById(id); }

    public Book save(Book book) { return bookRepository.save(book); }

    public void deleteById(Long id) { bookRepository.deleteById(id); }

    public List<Book> findByAuthorId(Long author_id) {
        return bookRepository.findAll().stream()
                .filter(book -> book.getFk_author().getId().equals(author_id))
                .collect(Collectors.toList());
    }

    public Set<String> findDistinctCategories() {
        return bookRepository.findAll().stream()
                .map(Book::getCategory)
                .collect(Collectors.toSet());
    }

    public List<Book> findByCategory(String category) {
        return bookRepository.findAllByCategory(category);
        /*return bookRepository.findAll().stream()
                .filter(book -> book.getCategory().equals(category))
                .collect(Collectors.toList());*/
    }
}
