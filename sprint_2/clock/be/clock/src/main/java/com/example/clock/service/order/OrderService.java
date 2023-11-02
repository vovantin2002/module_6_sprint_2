package com.example.clock.service.order;


import com.example.clock.model.Orders;
import com.example.clock.repository.order.IOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService implements IOrderService{
    @Autowired
    private IOrderRepository orderRepository;
    @Override
    public void add(Orders orders) {
        orderRepository.save(orders);
    }
}
