package com.example.clock.repository.order;

import com.example.clock.model.OrderDetails;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderDetailsRepository extends JpaRepository<OrderDetails,Integer> {
    Page<OrderDetails> findAllByOrders_Accounts_AccountId(Pageable pageable, Integer accountId);
}
