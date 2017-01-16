package com.bookstore.repository;

import com.bookstore.domain.Book;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by z00382545 on 12/26/16.
 */
public interface BookRepository extends CrudRepository<Book, Long> {

    List<Book> findByCategory(String category);

    List<Book> findByTitleContaining(String title);
}
