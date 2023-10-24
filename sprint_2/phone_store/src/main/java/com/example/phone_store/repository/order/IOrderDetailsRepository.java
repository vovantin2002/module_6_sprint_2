package com.example.phone_store.repository.order;

import com.example.phone_store.model.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderDetailsRepository extends JpaRepository<OrderDetails,Integer> {
}
