package com.example.phone_store.service.order;

import com.example.phone_store.model.OrderDetails;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface IOrderDetailsService {
    void add(OrderDetails orderDetails);
    Page<OrderDetails> display(Pageable pageable, Integer accountId);
}
