package com.example.phone_store.service.customer;

import com.example.phone_store.model.Customers;

public interface ICustomerService {
    void add(Customers customers);
    void edit(Customers customers);
    Customers display(Integer id);
}
