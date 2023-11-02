package com.example.clock.model;

import javax.persistence.*;

@Entity
@Table(name = "accounts")
public class Accounts {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id")
    private Integer accountId;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "flag_deleted")
    private boolean flagDeleted;
    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
    private Customers customers;

    public Accounts(Integer accountId, String username, String password, Boolean flagDeleted, Customers customers) {
        this.accountId = accountId;
        this.username = username;
        this.password = password;
        this.flagDeleted = flagDeleted;
        this.customers = customers;
    }

    public Accounts() {
    }

    @Override
    public String toString() {
        return "Accounts{" +
                "accountId=" + accountId +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", flagDeleted=" + flagDeleted +
                ", customers=" + customers +
                '}';
    }

    public Customers getCustomers() {
        return customers;
    }

    public void setCustomers(Customers customers) {
        this.customers = customers;
    }

    public Integer getAccountId() {
        return this.accountId;
    }

    public void setAccountId(Integer accountId) {
        this.accountId = accountId;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String userName) {
        this.username = userName;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean getFlagDeleted() {
        return this.flagDeleted;
    }

    public void setFlagDeleted(boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }
}
