package com.example.clock.repository.order;

import com.example.clock.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderRepository extends JpaRepository<Orders,Integer> {
}
