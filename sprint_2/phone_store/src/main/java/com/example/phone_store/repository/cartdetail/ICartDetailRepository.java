package com.example.phone_store.repository.cartdetail;

import com.example.phone_store.model.CartDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ICartDetailRepository extends JpaRepository<CartDetails,Integer> {
    List<CartDetails> findAllByAccounts_AccountId(Integer accountId);
}
