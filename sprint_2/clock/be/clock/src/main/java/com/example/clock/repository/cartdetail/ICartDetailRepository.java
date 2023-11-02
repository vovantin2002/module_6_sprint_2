package com.example.clock.repository.cartdetail;

import com.example.clock.model.CartDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ICartDetailRepository extends JpaRepository<CartDetails,Integer> {
    List<CartDetails> findAllByAccounts_AccountId(Integer accountId);
    CartDetails findByAccounts_AccountId(Integer accountId);
    CartDetails findAllByProducts_ProductId(Integer productId);
}
