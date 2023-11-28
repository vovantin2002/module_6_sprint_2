package com.example.clock.service.order;

import com.example.clock.model.OrderDetails;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;


public interface IOrderDetailsService {
    void add(OrderDetails orderDetails);
    Page<OrderDetails> display(Pageable pageable, Integer accountId);
    List<OrderDetails> findByOrderDetailsIdAndOrders_Accounts_AccountId(Integer id, Integer accountId);
}
