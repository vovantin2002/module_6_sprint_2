package com.example.clock.model;

import javax.persistence.*;

@Entity
@Table(name = "order_details")
public class OrderDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_details_id")
    private Integer orderDetailsId;
    @Column(name = "quantity")
    private Integer quantity;
    @Column(name = "flag_deleted")
    private boolean flagDeleted;
    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
    private Products products;
    @ManyToOne
    @JoinColumn(name = "order_id", referencedColumnName = "order_id")
    private Orders orders;

    public OrderDetails(Integer orderDetailsId, Integer quantity, Boolean flagDeleted, Products products, Orders orders) {
        this.orderDetailsId = orderDetailsId;
        this.quantity = quantity;
        this.flagDeleted = flagDeleted;
        this.products = products;
        this.orders = orders;
    }

    public OrderDetails() {
    }

    public Products getProducts() {
        return products;
    }

    public void setProducts(Products products) {
        this.products = products;
    }

    public Orders getOrders() {
        return orders;
    }

    public void setOrders(Orders orders) {
        this.orders = orders;
    }

    public Integer getOrderDetailsId() {
        return this.orderDetailsId;
    }

    public void setOrderDetailsId(Integer orderDetailsId) {
        this.orderDetailsId = orderDetailsId;
    }

    public Integer getQuantity() {
        return this.quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public boolean getFlagDeleted() {
        return this.flagDeleted;
    }

    public void setFlagDeleted(boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }
}
