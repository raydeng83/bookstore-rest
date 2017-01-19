package com.bookstore.domain.security;

import org.springframework.security.core.GrantedAuthority;

import java.io.Serializable;

/**
 * Created by z00382545 on 10/20/16.
 */
public class Authority implements GrantedAuthority, Serializable{


    private static final long serialVersionUID = 353859828906296479L;
    private final String authority;

    public Authority(String authority) {
        this.authority = authority;
    }

    @Override
    public String getAuthority() {
        return authority;
    }
}
