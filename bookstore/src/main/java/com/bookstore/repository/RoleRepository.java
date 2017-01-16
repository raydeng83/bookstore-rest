package com.bookstore.repository;

import com.bookstore.domain.security.Role;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by z00382545 on 12/21/16.
 */
public interface RoleRepository extends CrudRepository<Role, Integer> {
    Role findByName(String name);
}
