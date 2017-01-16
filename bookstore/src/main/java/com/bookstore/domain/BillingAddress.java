package com.bookstore.domain;

import javax.persistence.*;

/**
 * Created by z00382545 on 12/28/16.
 */

@Entity
public class BillingAddress {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String billingAddressName;
    private String billingAddressStreet1;
    private String billingAddressStreet2;
    private String billingAddressCity;
    private String billingAddressState;
    private String billingAddressCountry;
    private String billingAddressZipcode;

    @OneToOne
    private Order order;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBillingAddressStreet1() {
        return billingAddressStreet1;
    }

    public void setBillingAddressStreet1(String billingAddressStreet1) {
        this.billingAddressStreet1 = billingAddressStreet1;
    }

    public String getBillingAddressStreet2() {
        return billingAddressStreet2;
    }

    public void setBillingAddressStreet2(String billingAddressStreet2) {
        this.billingAddressStreet2 = billingAddressStreet2;
    }

    public String getBillingAddressState() {
        return billingAddressState;
    }

    public void setBillingAddressState(String billingAddressState) {
        this.billingAddressState = billingAddressState;
    }

    public String getBillingAddressCountry() {
        return billingAddressCountry;
    }

    public void setBillingAddressCountry(String billingAddressCountry) {
        this.billingAddressCountry = billingAddressCountry;
    }

    public String getBillingAddressZipcode() {
        return billingAddressZipcode;
    }

    public void setBillingAddressZipcode(String billingAddressZipcode) {
        this.billingAddressZipcode = billingAddressZipcode;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public String getBillingAddressCity() {
        return billingAddressCity;
    }

    public void setBillingAddressCity(String billingAddressCity) {
        this.billingAddressCity = billingAddressCity;
    }

    public String getBillingAddressName() {
        return billingAddressName;
    }

    public void setBillingAddressName(String billingAddressName) {
        this.billingAddressName = billingAddressName;
    }
}
