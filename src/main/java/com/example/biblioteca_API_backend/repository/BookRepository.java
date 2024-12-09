package com.example.biblioteca_API_backend.repository;

import com.example.biblioteca_API_backend.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    @Query("SELECT l FROM Book l WHERE l.category = :category")
    List<Book> findAllByCategory(String category);
}
