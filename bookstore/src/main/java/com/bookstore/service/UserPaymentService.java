package com.bookstore.service;

import com.bookstore.domain.UserPayment;

/**
 * Created by z00382545 on 1/1/17.
 */
public interface UserPaymentService {
    UserPayment findById(Long id);

    void removeById(Long id);
}
