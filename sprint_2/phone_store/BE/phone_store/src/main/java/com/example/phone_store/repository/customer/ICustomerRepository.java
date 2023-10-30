package com.example.phone_store.repository.customer;

import com.example.phone_store.model.Accounts;
import com.example.phone_store.model.Customers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICustomerRepository extends JpaRepository<Customers,Integer> {
}
