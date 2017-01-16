package com.bookstore.repository;

import com.bookstore.domain.CartItem;
import com.bookstore.domain.Order;
import com.bookstore.domain.ShoppingCart;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by z00382545 on 12/29/16.
 */

@Transactional
public interface CartItemRepository extends CrudRepository<CartItem, Long> {

    List<CartItem> findByShoppingCart(ShoppingCart shoppingCart);

    List<CartItem> findByOrder(Order order);
}
