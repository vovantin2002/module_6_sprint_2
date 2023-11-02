package com.example.clock.service.product;


import com.example.clock.model.ProductImages;
import com.example.clock.repository.product.IProductImagesRepository;
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
