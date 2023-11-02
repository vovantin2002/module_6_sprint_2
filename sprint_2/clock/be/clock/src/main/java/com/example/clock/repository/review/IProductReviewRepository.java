package com.example.clock.repository.review;

import com.example.clock.model.ProductReviews;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductReviewRepository extends JpaRepository<ProductReviews,Integer> {
    Page<ProductReviews> findAllByProducts_ProductId(Pageable pageable, Integer productId);
}
