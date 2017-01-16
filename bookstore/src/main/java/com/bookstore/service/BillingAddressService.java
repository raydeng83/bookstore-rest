package com.bookstore.service;

import com.bookstore.domain.BillingAddress;
import com.bookstore.domain.UserBilling;

/**
 * Created by z00382545 on 12/30/16.
 */
public interface BillingAddressService {

    BillingAddress setByUserBilling(UserBilling userBilling, BillingAddress billingAddress);
}
