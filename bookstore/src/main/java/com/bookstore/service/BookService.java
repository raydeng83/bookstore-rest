package com.bookstore.service;

import com.bookstore.domain.Book;

import java.util.List;

/**
 * Created by z00382545 on 12/26/16.
 */

public interface BookService {
    List<Book> findAll();

    Book findOne(Long id);

    Book save(Book book);

    List<Book> findByCategory(String category);

    List<Book> blurrySearch(String title);

}
