package com.example.clock.repository.account;

import com.example.clock.model.Accounts;
import org.springframework.data.jpa.repository.JpaRepository;


public interface IAccountRepository extends JpaRepository<Accounts,Integer> {
    Accounts findAccountsByUsername(String username);
}
