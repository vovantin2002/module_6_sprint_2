package com.example.clock.model;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Integer orderId;

    @Column(name = "order_date")
    private String orderDate;

    @Column(name = "total_amount")
    private Double totalAmount;

    @Column(name = "flag_deleted")
    private boolean flagDeleted;
    @ManyToOne
    @JoinColumn(name = "account_id", referencedColumnName = "account_id")
    private Accounts accounts;

    public Orders(Integer orderId, String orderDate, Double totalAmount, Boolean flagDeleted, Accounts accounts) {
        this.orderId = orderId;
        this.orderDate = orderDate;
        this.totalAmount = totalAmount;
        this.flagDeleted = flagDeleted;
        this.accounts = accounts;
    }

    public Orders() {
    }

    public Accounts getAccounts() {
        return accounts;
    }

    public void setAccounts(Accounts accounts) {
        this.accounts = accounts;
    }

    public Integer getOrderId() {
        return this.orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public String getOrderDate() {
        return this.orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    public Double getTotalAmount() {
        return this.totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public boolean getFlagDeleted() {
        return this.flagDeleted;
    }

    public void setFlagDeleted(boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }
}
