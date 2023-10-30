package com.example.phone_store.service.cartdetail;

import com.example.phone_store.model.CartDetails;

import java.util.List;

public interface ICartDetailService {
    void add(CartDetails cartDetails);
    void delete(Integer id);
    List<CartDetails> display();
    List<CartDetails> findCartByAccountId(Integer accountId);
    CartDetails findByAccountId(Integer accountId);
    CartDetails findByProducts(Integer productId);
}
