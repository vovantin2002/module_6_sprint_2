package com.example.phone_store.service.cartdetail;

import com.example.phone_store.model.CartDetails;
import com.example.phone_store.repository.cartdetail.ICartDetailRepository;
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
}
