package com.example.clock.service.order;


import com.example.clock.model.OrderDetails;
import com.example.clock.repository.order.IOrderDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailsService implements IOrderDetailsService{
    @Autowired
    private IOrderDetailsRepository orderDetailsRepository;
    @Override
    public void add(OrderDetails orderDetails) {
        orderDetailsRepository.save(orderDetails);
    }

    @Override
    public Page<OrderDetails> display(Pageable pageable, Integer accountId) {
        return orderDetailsRepository.findAllByOrders_Accounts_AccountId(pageable, accountId);
    }

    @Override
    public List<OrderDetails> findByOrderDetailsIdAndOrders_Accounts_AccountId(Integer id, Integer accountId) {
        return orderDetailsRepository.findByProducts_ProductIdAndOrders_Accounts_AccountId(id,accountId);
    }
}
