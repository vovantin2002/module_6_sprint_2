package com.example.clock.repository.customer;

import com.example.clock.model.Customers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICustomerRepository extends JpaRepository<Customers,Integer> {
}
