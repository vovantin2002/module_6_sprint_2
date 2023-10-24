package com.example.phone_store.service.product;

import com.example.phone_store.model.ProductProjection;
import com.example.phone_store.model.Products;
import com.example.phone_store.repository.product.IProductRepository;
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
    public Page<ProductProjection> search(String modelName, String productTypes, String minPrice, String maxPrice, String phoneBrands, Pageable pageable) {
        System.out.println(productRepository.findAllByModelNameContainingAndProductTypesAndPriceBetweenAndPhoneBrands(modelName, productTypes, minPrice, maxPrice, phoneBrands, pageable));
        return productRepository.findAllByModelNameContainingAndProductTypesAndPriceBetweenAndPhoneBrands(modelName, productTypes, minPrice, maxPrice, phoneBrands, pageable);
    }


}
