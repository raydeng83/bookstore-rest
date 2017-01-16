package com.bookstore.service;

import com.bookstore.domain.Payment;
import com.bookstore.domain.UserPayment;

/**
 * Created by z00382545 on 12/30/16.
 */
public interface PaymentService {

    Payment setByUserPayment(UserPayment userPayment, Payment payment);
}
