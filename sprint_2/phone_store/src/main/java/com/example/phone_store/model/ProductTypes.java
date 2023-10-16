package com.example.phone_store.model;

import javax.persistence.*;

@Entity
@Table(name = "product_types")
public class ProductTypes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_type_id")
    private Integer productTypeId;

    @Column(name = "product_type_name")
    private String productTypeName;

    @Column(name = "flag_deleted")
    private Boolean flagDeleted;

    public ProductTypes(Integer productTypeId, String productTypeName, Boolean flagDeleted) {
        this.productTypeId = productTypeId;
        this.productTypeName = productTypeName;
        this.flagDeleted = flagDeleted;
    }

    public ProductTypes() {
    }

    public Integer getProductTypeId() {
        return this.productTypeId;
    }

    public void setProductTypeId(Integer productTypeId) {
        this.productTypeId = productTypeId;
    }

    public String getProductTypeName() {
        return this.productTypeName;
    }

    public void setProductTypeName(String productTypeName) {
        this.productTypeName = productTypeName;
    }

    public Boolean getFlagDeleted() {
        return this.flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }
}
