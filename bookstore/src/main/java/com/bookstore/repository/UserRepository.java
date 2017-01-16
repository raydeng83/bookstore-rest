package com.bookstore.repository;

import com.bookstore.domain.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by z00382545 on 12/20/16.
 */
public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);
    User findByEmail(String email);
    List<User> findAll();
}
