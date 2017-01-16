package com.bookstore.service.impl;

import com.bookstore.domain.*;
import com.bookstore.repository.BillingAddressRepository;
import com.bookstore.repository.OrderRepository;
import com.bookstore.repository.PaymentRepository;
import com.bookstore.repository.ShippingAddressRepository;
import com.bookstore.service.BookService;
import com.bookstore.service.CartItemService;
import com.bookstore.service.OrderService;
import com.bookstore.utility.MailConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;

/**
 * Created by z00382545 on 12/30/16.
 */

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private BillingAddressRepository billingAddressRepository;

    @Autowired
    private ShippingAddressRepository shippingAddressRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private CartItemService cartItemService;

    @Autowired
    private BookService bookService;

    @Autowired
    private MailConstructor mailConstructor;

    public synchronized Order createOrder(
            ShoppingCart shoppingCart,
            ShippingAddress shippingAddress,
            BillingAddress billingAddress,
            Payment payment,
            String shippingMethod,
            User user
            ) {
        Order order = new Order();
        order.setBillingAddress(billingAddress);
        order.setOrderStatus("created");
        order.setPayment(payment);
        order.setShippingAddress(shippingAddress);
        order.setShippingMethod(shippingMethod);

        List<CartItem> cartItemList = cartItemService.findByShoppingCart(shoppingCart);

        for (CartItem cartItem : cartItemList) {
            Book book = cartItem.getBook();
            cartItem.setOrder(order);
            book.setInStockNumber(book.getInStockNumber()-cartItem.getQty());
        }

        order.setCartItemList(cartItemList);
        order.setOrderDate(Calendar.getInstance().getTime());
        order.setOrderTotal(shoppingCart.getGrandTotal());
        shippingAddress.setOrder(order);
        billingAddress.setOrder(order);
        payment.setOrder(order);
        order.setUser(user);
        order = orderRepository.save(order);


        return order;
    }

    public Order findOne(Long id) {
        return orderRepository.findOne(id);
    }
}
