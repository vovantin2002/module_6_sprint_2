package com.example.phone_store.model;

import javax.persistence.*;

@Entity
@Table(name = "account_roles")
public class AccountRoles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_roles_id")
    private Integer accountRolesId;
    @Column(name = "flag_deleted")
    private Boolean flagDeleted;
    @ManyToOne
    @JoinColumn(name = "account_id", referencedColumnName = "account_id")
    private Accounts accounts;
    @ManyToOne
    @JoinColumn(name = "role_id", referencedColumnName = "role_id")
    private Roles roles;

    public AccountRoles(Integer accountRolesId, Boolean flagDeleted, Accounts accounts, Roles roles) {
        this.accountRolesId = accountRolesId;
        this.flagDeleted = flagDeleted;
        this.accounts = accounts;
        this.roles = roles;
    }

    public AccountRoles() {
    }

    public Accounts getAccounts() {
        return accounts;
    }

    public void setAccounts(Accounts accounts) {
        this.accounts = accounts;
    }

    public Roles getRoles() {
        return roles;
    }

    public void setRoles(Roles roles) {
        this.roles = roles;
    }

    public Integer getAccountRolesId() {
        return this.accountRolesId;
    }

    public void setAccountRolesId(Integer accountRolesId) {
        this.accountRolesId = accountRolesId;
    }

    public Boolean getFlagDeleted() {
        return this.flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }
}
