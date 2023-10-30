package com.example.phone_store.model;



import java.util.List;

public class OrderRequestDTO {
    private List<OrderDetails> orderDetails;
    private Orders orders;

    public OrderRequestDTO(List<OrderDetails> orderDetails, Orders orders) {
        this.orderDetails = orderDetails;
        this.orders = orders;
    }

    public OrderRequestDTO() {
    }

    public List<OrderDetails> getOrderDetails() {
        return orderDetails;
    }

    public void setOrderDetails(List<OrderDetails> orderDetails) {
        this.orderDetails = orderDetails;
    }

    public Orders getOrders() {
        return orders;
    }

    public void setOrders(Orders orders) {
        this.orders = orders;
    }
}