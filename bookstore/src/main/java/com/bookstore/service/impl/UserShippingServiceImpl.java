package com.bookstore.service.impl;

import com.bookstore.domain.UserShipping;
import com.bookstore.repository.UserShippingRepository;
import com.bookstore.service.UserShippingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by z00382545 on 1/1/17.
 */

@Service
public class UserShippingServiceImpl implements UserShippingService{

    @Autowired
    private UserShippingRepository userShippingRepository;

    public UserShipping findById(Long id) {
        return userShippingRepository.findOne(id);
    }

    public void removeById(Long id) {
        userShippingRepository.delete(id);
    }
}
