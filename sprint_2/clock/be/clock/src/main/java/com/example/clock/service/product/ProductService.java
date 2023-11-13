package com.example.clock.service.product;


import com.example.clock.model.ProductProjection;
import com.example.clock.model.Products;
import com.example.clock.repository.product.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Override
    public List<Products> display() {
        return productRepository.findAll();
    }

    @Override
    public List<ProductProjection> displayAllByQuantityOrder() {
        return productRepository.displayAllByQuantityOrder();
    }

    @Override
    public Page<Products> displayList(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public void addNewProduct(Products products) {
        productRepository.save(products);
    }

    @Override
    public void editProduct(Products products) {
        productRepository.save(products);
    }

    @Override
    public ProductProjection findProductById(int id) {
        return productRepository.findProductById(id);
    }

    @Override
    public Page<ProductProjection> search(String name, String brands, String color, String categories, String minPrice, String maxPrice, Pageable pageable) {
        return productRepository.search(name,brands,color,categories,minPrice,maxPrice,pageable);
    }
}
