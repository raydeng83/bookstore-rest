package com.bookstore.repository;

import com.bookstore.domain.ShippingAddress;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by z00382545 on 12/30/16.
 */
public interface ShippingAddressRepository extends CrudRepository<ShippingAddress, Long> {
}
