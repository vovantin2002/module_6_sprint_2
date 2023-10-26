package com.example.phone_store.service.review;

import com.example.phone_store.model.ProductReviews;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductReviewService {
    Page<ProductReviews> display(Pageable pageable, Integer productId);
    void add(ProductReviews productReviews);
}
