package com.bookstore.repository;

import com.bookstore.domain.BookToCartItem;
import com.bookstore.domain.CartItem;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

/**
 * Created by z00382545 on 12/29/16.
 */
@Transactional
public interface BookToCartItemRepository extends CrudRepository<BookToCartItem,Long>{

    void deleteByCartItem (CartItem cartItem);
}
