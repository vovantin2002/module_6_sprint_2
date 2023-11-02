package com.example.clock.repository.product;

import com.example.clock.model.ProductImages;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface IProductImagesRepository extends JpaRepository<ProductImages,Integer> {
        Set<ProductImages> findAllByProducts_ProductId(Integer productId);
}
