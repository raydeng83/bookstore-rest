package com.bookstore.service;

import com.bookstore.domain.UserShipping;

/**
 * Created by z00382545 on 1/1/17.
 */
public interface UserShippingService {

    UserShipping findById(Long id);

    void removeById(Long id);
}
