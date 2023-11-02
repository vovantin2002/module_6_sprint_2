package com.example.clock.service.product;


import com.example.clock.model.ProductImages;

import java.util.Set;

public interface IProductImagesService {
    Set<ProductImages> findByProductId(Integer productId);
}
