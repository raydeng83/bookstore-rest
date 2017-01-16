package com.bookstore.repository;

import com.bookstore.domain.BillingAddress;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by z00382545 on 12/30/16.
 */
public interface BillingAddressRepository extends CrudRepository<BillingAddress, Long> {
}
