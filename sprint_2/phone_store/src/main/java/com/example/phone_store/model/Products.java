package com.example.phone_store.model;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Products {
    @Id
    @Column(name = "product_id")
    private Integer productId;

    @Column(name = "model_name")
    private String modelName;

    @Column(name = "color")
    private String color;

    @Column(name = "price")
    private Double price;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "screen_size")
    private Double screenSize;

    @Column(name = "camera_resolution")
    private String cameraResolution;

    @Column(name = "storage_capacity")
    private Integer storageCapacity;

    @Column(name = "RAM_capacity")
    private Integer ramCapacity;

    @Column(name = "battery_capacity")
    private Integer batteryCapacity;

    @Column(name = "operating_system")
    private String operatingSystem;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "flag_deleted")
    private Boolean flagDeleted;

    @Column(name = "sim")
    private String sim;

    @Column(name = "launch_time")
    private String launchTime;

    @Column(name = "origin")
    private String origin;

    @ManyToOne
    @JoinColumn(name = "product_type_id", referencedColumnName = "product_type_id")
    private ProductTypes productTypes;
    @ManyToOne
    @JoinColumn(name = "brand_id", referencedColumnName = "brand_id")
    private PhoneBrands phoneBrands;

    public Products(Integer productId, String modelName, String color, Double price, Integer quantity, Double screenSize, String cameraResolution, Integer storageCapacity, Integer ramCapacity, Integer batteryCapacity, String operatingSystem, String imageUrl, Boolean flagDeleted, String sim, String launchTime, String origin, ProductTypes productTypes, PhoneBrands phoneBrands) {
        this.productId = productId;
        this.modelName = modelName;
        this.color = color;
        this.price = price;
        this.quantity = quantity;
        this.screenSize = screenSize;
        this.cameraResolution = cameraResolution;
        this.storageCapacity = storageCapacity;
        this.ramCapacity = ramCapacity;
        this.batteryCapacity = batteryCapacity;
        this.operatingSystem = operatingSystem;
        this.imageUrl = imageUrl;
        this.flagDeleted = flagDeleted;
        this.sim = sim;
        this.launchTime = launchTime;
        this.origin = origin;
        this.productTypes = productTypes;
        this.phoneBrands = phoneBrands;
    }

    public Products() {
    }

    public ProductTypes getProductTypes() {
        return productTypes;
    }

    public void setProductTypes(ProductTypes productTypes) {
        this.productTypes = productTypes;
    }

    public PhoneBrands getPhoneBrands() {
        return phoneBrands;
    }

    public void setPhoneBrands(PhoneBrands phoneBrands) {
        this.phoneBrands = phoneBrands;
    }

    public Integer getProductId() {
        return this.productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getModelName() {
        return this.modelName;
    }

    public void setModelName(String modelName) {
        this.modelName = modelName;
    }

    public String getColor() {
        return this.color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Double getPrice() {
        return this.price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return this.quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getScreenSize() {
        return this.screenSize;
    }

    public void setScreenSize(Double screenSize) {
        this.screenSize = screenSize;
    }

    public String getCameraResolution() {
        return this.cameraResolution;
    }

    public void setCameraResolution(String cameraResolution) {
        this.cameraResolution = cameraResolution;
    }

    public Integer getStorageCapacity() {
        return this.storageCapacity;
    }

    public void setStorageCapacity(Integer storageCapacity) {
        this.storageCapacity = storageCapacity;
    }

    public Integer getRamCapacity() {
        return this.ramCapacity;
    }

    public void setRamCapacity(Integer ramCapacity) {
        this.ramCapacity = ramCapacity;
    }

    public Integer getBatteryCapacity() {
        return this.batteryCapacity;
    }

    public void setBatteryCapacity(Integer batteryCapacity) {
        this.batteryCapacity = batteryCapacity;
    }

    public String getOperatingSystem() {
        return this.operatingSystem;
    }

    public void setOperatingSystem(String operatingSystem) {
        this.operatingSystem = operatingSystem;
    }

    public String getImageUrl() {
        return this.imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Boolean getFlagDeleted() {
        return this.flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }

    public String getSim() {
        return this.sim;
    }

    public void setSim(String sim) {
        this.sim = sim;
    }

    public String getLaunchTime() {
        return this.launchTime;
    }

    public void setLaunchTime(String launchTime) {
        this.launchTime = launchTime;
    }

    public String getOrigin() {
        return this.origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }
}
