package com.example.phone_store.model;

import javax.persistence.*;

@Entity
@Table(name = "phone_brands")
public class PhoneBrands {
    @Id
    @Column(name = "brand_id")
    private Integer brandId;

    @Column(name = "brand_name")
    private String brandName;

    @Column(name = "flag_deleted")
    private Boolean flagDeleted;

    public PhoneBrands(Integer brandId, String brandName, Boolean flagDeleted) {
        this.brandId = brandId;
        this.brandName = brandName;
        this.flagDeleted = flagDeleted;
    }

    public PhoneBrands() {
    }


    public Integer getBrandId() {
        return this.brandId;
    }

    public void setBrandId(Integer brandId) {
        this.brandId = brandId;
    }

    public String getBrandName() {
        return this.brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public Boolean getFlagDeleted() {
        return this.flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }
}
