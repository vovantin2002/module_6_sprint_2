package com.example.phone_store.service.order;

import com.example.phone_store.model.OrderDetails;
import com.example.phone_store.repository.order.IOrderDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderDetailsService implements IOrderDetailsService{
    @Autowired
    private IOrderDetailsRepository orderDetailsRepository;
    @Override
    public void add(OrderDetails orderDetails) {
        orderDetailsRepository.save(orderDetails);
    }
}
