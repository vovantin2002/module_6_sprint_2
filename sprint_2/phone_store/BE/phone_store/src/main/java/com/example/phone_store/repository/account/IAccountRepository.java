package com.example.phone_store.repository.account;

import com.example.phone_store.model.Accounts;
import org.springframework.data.jpa.repository.JpaRepository;


public interface IAccountRepository extends JpaRepository<Accounts,Integer> {
    Accounts findAccountsByUsername(String username);
}
