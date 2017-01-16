package com.bookstore.repository;

import com.bookstore.domain.ShoppingCart;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by z00382545 on 12/30/16.
 */
public interface ShoppingCartRepository extends CrudRepository<ShoppingCart, Long> {
}
