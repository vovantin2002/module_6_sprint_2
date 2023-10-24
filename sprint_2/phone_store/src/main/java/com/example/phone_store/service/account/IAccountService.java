package com.example.phone_store.service.account;

import com.example.phone_store.model.Accounts;
import org.springframework.security.core.userdetails.UserDetailsService;
public interface IAccountService extends UserDetailsService{
Accounts findAccontsByUserName(String userName);
void add(Accounts accounts);
    Boolean existsByUsername(String userName);
}
