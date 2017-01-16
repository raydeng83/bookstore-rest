package com.bookstore.service;

import com.bookstore.domain.CartItem;
import com.bookstore.domain.ShoppingCart;

import java.math.BigDecimal;

/**
 * Created by z00382545 on 12/30/16.
 */
public interface ShoppingCartService {

    ShoppingCart updateShoppingCart(ShoppingCart shoppingCart);

    void clearShoppingCart(ShoppingCart shoppingCart);
}
