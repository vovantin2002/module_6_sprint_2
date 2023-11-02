package com.example.clock.service.customer;


import com.example.clock.model.Customers;
import com.example.clock.repository.customer.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService{
    @Autowired
    private ICustomerRepository customerRepository;
    @Override
    public void add(Customers customers) {
        customerRepository.save(customers);
    }

    @Override
    public void edit(Customers customers) {
        customerRepository.save(customers);
    }

    @Override
    public Customers display(Integer id) {
        return customerRepository.findById(id).get();
    }
}
