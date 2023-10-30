package com.example.phone_store.service.product;

import com.example.phone_store.model.ProductProjection;
import com.example.phone_store.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    List<Products> display();
    List<ProductProjection> displayAllByQuantityOrder();
    Page<Products> displayList(Pageable pageable);
    void addNewProduct(Products products);
    void editProduct(Products products);
    ProductProjection findProductById(int  id);
    Page<ProductProjection> search( String modelName, String productTypes, String minPrice, String maxPrice, String phoneBrands, Pageable pageable);
}
