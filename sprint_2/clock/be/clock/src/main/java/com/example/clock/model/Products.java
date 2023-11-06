package com.example.clock.model;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "products")
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Integer productId;

    @Column(name = "name")
    private String name;

    @Column(name = "color")
    private String color;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "glasses")
    private String glasses;

    @Column(name = "international_warranty")
    private String internationalWarranty;

    @Column(name = "model_number")
    private String modelNumber;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "origin")
    private String origin;

    @Column(name = "glass_material")
    private String glassMaterial;

    @Column(name = "movement_type")
    private String movementType;

    @Column(name = "dial_diameter")
    private BigDecimal dialDiameter;

    @Column(name = "dial_thickness")
    private BigDecimal dialThickness;

    @Column(name = "functions")
    private String functions;

    @Column(name = "description")
    private String description;

    @Column(name = "flag_deleted")
    private Boolean flagDeleted;
    @ManyToOne
    @JoinColumn(name = "categories_id", referencedColumnName = "categories_id")
    private Categories categories;
    @ManyToOne
    @JoinColumn(name = "brand_id", referencedColumnName = "brand_id")
    private Brands brands;

    public Products(Integer productId, String name, String color, BigDecimal price, Integer quantity, String glasses, String internationalWarranty, String modelNumber, String imageUrl, String origin, String glassMaterial, String movementType, BigDecimal dialDiameter, BigDecimal dialThickness, String functions, String description, Boolean flagDeleted, Categories categories, Brands brands) {
        this.productId = productId;
        this.name = name;
        this.color = color;
        this.price = price;
        this.quantity = quantity;
        this.glasses = glasses;
        this.internationalWarranty = internationalWarranty;
        this.modelNumber = modelNumber;
        this.imageUrl = imageUrl;
        this.origin = origin;
        this.glassMaterial = glassMaterial;
        this.movementType = movementType;
        this.dialDiameter = dialDiameter;
        this.dialThickness = dialThickness;
        this.functions = functions;
        this.description = description;
        this.flagDeleted = flagDeleted;
        this.categories = categories;
        this.brands = brands;
    }

    public Products() {
    }

    public Categories getCategories() {
        return categories;
    }

    public void setCategories(Categories categories) {
        this.categories = categories;
    }

    public Brands getBrands() {
        return brands;
    }

    public void setBrands(Brands brands) {
        this.brands = brands;
    }

    public Integer getProductId() {
        return this.productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return this.color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public BigDecimal getPrice() {
        return this.price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return this.quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getGlasses() {
        return this.glasses;
    }

    public void setGlasses(String glasses) {
        this.glasses = glasses;
    }

    public String getInternationalWarranty() {
        return this.internationalWarranty;
    }

    public void setInternationalWarranty(String internationalWarranty) {
        this.internationalWarranty = internationalWarranty;
    }

    public String getModelNumber() {
        return this.modelNumber;
    }

    public void setModelNumber(String modelNumber) {
        this.modelNumber = modelNumber;
    }

    public String getImageUrl() {
        return this.imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getOrigin() {
        return this.origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getGlassMaterial() {
        return this.glassMaterial;
    }

    public void setGlassMaterial(String glassMaterial) {
        this.glassMaterial = glassMaterial;
    }

    public String getMovementType() {
        return this.movementType;
    }

    public void setMovementType(String movementType) {
        this.movementType = movementType;
    }

    public BigDecimal getDialDiameter() {
        return this.dialDiameter;
    }

    public void setDialDiameter(BigDecimal dialDiameter) {
        this.dialDiameter = dialDiameter;
    }

    public BigDecimal getDialThickness() {
        return this.dialThickness;
    }

    public void setDialThickness(BigDecimal dialThickness) {
        this.dialThickness = dialThickness;
    }

    public String getFunctions() {
        return this.functions;
    }

    public void setFunctions(String functions) {
        this.functions = functions;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getFlagDeleted() {
        return this.flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }
}
