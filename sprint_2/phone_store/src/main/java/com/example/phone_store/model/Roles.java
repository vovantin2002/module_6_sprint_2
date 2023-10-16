package com.example.phone_store.model;

import javax.persistence.*;

@Entity
@Table(name = "roles")
public class Roles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id")
    private Integer roleId;

    @Column(name = "role_name")
    private String roleName;

    @Column(name = "flag_deleted")
    private Boolean flagDeleted;

    public Roles(Integer roleId, String roleName, Boolean flagDeleted) {
        this.roleId = roleId;
        this.roleName = roleName;
        this.flagDeleted = flagDeleted;
    }

    public Roles() {
    }

    public Integer getRoleId() {
        return this.roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return this.roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public Boolean getFlagDeleted() {
        return this.flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }
}
