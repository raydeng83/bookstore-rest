package com.bookstore.service;

import com.bookstore.domain.*;

/**
 * Created by z00382545 on 12/30/16.
 */
public interface OrderService {
    Order createOrder(
            ShoppingCart shoppingCart,
            ShippingAddress shippingAddress,
            BillingAddress billingAddress,
            Payment payment,
            String shippingMethod,
            User user
    );

    Order findOne(Long id);
}
