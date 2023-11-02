package com.example.clock.service.cartdetail;

import com.example.clock.model.CartDetails;
import com.example.clock.repository.cartdetail.ICartDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartDetailService implements ICartDetailService{
    @Autowired
    private ICartDetailRepository cartDetailRepository;
    @Override
    public void add(CartDetails cartDetails) {
        cartDetailRepository.save(cartDetails);
    }

    @Override
    public void delete(Integer id) {
        cartDetailRepository.deleteById(id);
    }

    @Override
    public List<CartDetails> display() {
        return cartDetailRepository.findAll();
    }

    @Override
    public List<CartDetails> findCartByAccountId(Integer accountId) {
        return cartDetailRepository.findAllByAccounts_AccountId(accountId);
    }

    @Override
    public CartDetails findByAccountId(Integer accountId) {
        return cartDetailRepository.findByAccounts_AccountId(accountId);
    }

    @Override
    public CartDetails findByProducts(Integer productId) {
        return cartDetailRepository.findAllByProducts_ProductId(productId);
    }
}
