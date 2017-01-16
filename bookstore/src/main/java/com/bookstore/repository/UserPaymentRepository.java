package com.bookstore.repository;

import com.bookstore.domain.UserPayment;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by z00382545 on 12/31/16.
 */
public interface UserPaymentRepository extends CrudRepository<UserPayment, Long> {
}
