package com.example.biblioteca_API_backend.controller;

import com.example.biblioteca_API_backend.entities.Book;
import com.example.biblioteca_API_backend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@CrossOrigin("*")
@RequestMapping("/api/books")
@RestController
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        return bookService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Book addBook(@RequestBody Book book) {
        return bookService.save(book);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
        bookService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody Book book) {
        return bookService.findById(id)
                .map(existingBook -> {
                    book.setId(existingBook.getId());
                    return ResponseEntity.ok(bookService.save(book));
                }).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/author/{id}")
    public List<Book> getBooksByAuthor(@PathVariable Long id) {
        return bookService.findByAuthorId(id);
    }

    @GetMapping("/categories")
    public Set<String> getCategories() {
        return bookService.findDistinctCategories();
    }

    @GetMapping("/categories/{category}")
    public List<Book> getBooksByCategory(@PathVariable String category) {
        return bookService.findByCategory(category);
    }
}
