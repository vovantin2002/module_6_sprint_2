package com.example.phone_store.repository.order;

import com.example.phone_store.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderRepository extends JpaRepository<Orders,Integer> {
}
