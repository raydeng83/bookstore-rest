package com.bookstore.repository;

import com.bookstore.domain.Payment;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by z00382545 on 12/30/16.
 */
public interface PaymentRepository extends CrudRepository<Payment, Long> {
}
