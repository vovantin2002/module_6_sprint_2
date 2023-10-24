package com.example.phone_store.service.product;

import com.example.phone_store.model.ProductImages;
import com.example.phone_store.repository.product.IProductImagesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class ProductImagesService implements IProductImagesService{
    @Autowired
    private IProductImagesRepository productImagesRepository;
    @Override
    public Set<ProductImages> findByProductId(Integer productId) {
        return productImagesRepository.findAllByProducts_ProductId(productId);
    }
}
