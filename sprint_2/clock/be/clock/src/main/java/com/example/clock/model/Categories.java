package com.example.clock.model;

import javax.persistence.*;

@Entity
@Table(name = "categories")
public class Categories {
    @Id
    @Column(name = "categories_id")
    private Integer categoriesId;

    @Column(name = "name")
    private String name;

    @Column(name = "flag_deleted")
    private Boolean flagDeleted;

    public Categories(Integer categoriesId, String name, Boolean flagDeleted) {
        this.categoriesId = categoriesId;
        this.name = name;
        this.flagDeleted = flagDeleted;
    }

    public Categories() {
    }


    public Integer getCategoriesId() {
        return this.categoriesId;
    }

    public void setCategoriesId(Integer categoriesId) {
        this.categoriesId = categoriesId;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getFlagDeleted() {
        return this.flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }
}
