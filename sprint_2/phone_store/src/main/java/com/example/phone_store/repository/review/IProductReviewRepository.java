package com.example.phone_store.repository.review;

import com.example.phone_store.model.ProductReviews;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductReviewRepository extends JpaRepository<ProductReviews,Integer> {
}
