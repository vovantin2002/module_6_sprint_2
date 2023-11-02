package com.example.clock.service.cartdetail;


import com.example.clock.model.CartDetails;

import java.util.List;

public interface ICartDetailService {
    void add(CartDetails cartDetails);
    void delete(Integer id);
    List<CartDetails> display();
    List<CartDetails> findCartByAccountId(Integer accountId);
    CartDetails findByAccountId(Integer accountId);
    CartDetails findByProducts(Integer productId);
}
