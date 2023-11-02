package com.example.clock.service.customer;


import com.example.clock.model.Customers;

public interface ICustomerService {
    void add(Customers customers);
    void edit(Customers customers);
    Customers display(Integer id);
}
