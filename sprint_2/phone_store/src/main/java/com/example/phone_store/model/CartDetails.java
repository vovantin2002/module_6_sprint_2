package com.example.phone_store.model;

import javax.persistence.*;

@Entity
@Table(name = "cart_details")
public class CartDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id")
    private Integer cartId;
    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "flag_deleted")
    private Boolean flagDeleted;
    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
    private Products products;
    @ManyToOne
    @JoinColumn(name = "account_id", referencedColumnName = "account_id")
    private Accounts accounts;

    public CartDetails(Integer cartId, Integer quantity, Boolean flagDeleted, Products products, Accounts accounts) {
        this.cartId = cartId;
        this.quantity = quantity;
        this.flagDeleted = flagDeleted;
        this.products = products;
        this.accounts = accounts;
    }

    public CartDetails() {
    }

    public Products getProducts() {
        return products;
    }

    public void setProducts(Products products) {
        this.products = products;
    }

    public Accounts getAccounts() {
        return accounts;
    }

    public void setAccounts(Accounts accounts) {
        this.accounts = accounts;
    }

    public Integer getCartId() {
        return this.cartId;
    }

    public void setCartId(Integer cartId) {
        this.cartId = cartId;
    }

    public Integer getQuantity() {
        return this.quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Boolean getFlagDeleted() {
        return this.flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }
}
