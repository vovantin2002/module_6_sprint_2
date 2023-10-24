package com.example.phone_store.service.product;

import com.example.phone_store.model.ProductImages;

import java.util.Set;

public interface IProductImagesService {
    Set<ProductImages> findByProductId(Integer productId);
}
