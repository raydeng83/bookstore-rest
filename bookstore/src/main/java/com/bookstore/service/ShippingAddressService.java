package com.bookstore.service;

import com.bookstore.domain.ShippingAddress;
import com.bookstore.domain.UserShipping;

/**
 * Created by z00382545 on 12/30/16.
 */
public interface ShippingAddressService {

    ShippingAddress setByUserShipping(UserShipping userShipping, ShippingAddress shippingAddress);
}
