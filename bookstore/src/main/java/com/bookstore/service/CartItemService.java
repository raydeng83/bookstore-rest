package com.bookstore.service;

import com.bookstore.domain.*;

import java.util.List;

/**
 * Created by z00382545 on 12/29/16.
 */
public interface CartItemService {

    CartItem addBookToCartItem(Book book, User user, int qty );

    List<CartItem> findByShoppingCart(ShoppingCart shoppingCart);

    List<CartItem> findByOrder(Order order);

    CartItem updateCartItem(CartItem cartItem);

    void removeCartItem (CartItem cartItem);

    CartItem findById(Long id);

    CartItem save(CartItem cartItem);
}
