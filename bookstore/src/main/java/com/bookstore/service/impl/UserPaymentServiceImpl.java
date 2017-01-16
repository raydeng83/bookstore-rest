package com.bookstore.service.impl;

import com.bookstore.domain.UserPayment;
import com.bookstore.repository.UserPaymentRepository;
import com.bookstore.service.UserPaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * Created by z00382545 on 1/1/17.
 */

@Service
public class UserPaymentServiceImpl implements UserPaymentService{

    @Autowired
    private UserPaymentRepository userPaymentRepository;

    public UserPayment findById(Long id) {
        return userPaymentRepository.findOne(id);
    }

    public void removeById(Long id) {
        userPaymentRepository.delete(id);
    }
}
