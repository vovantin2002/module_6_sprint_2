package com.example.phone_store.service.review;

import com.example.phone_store.model.ProductReviews;
import com.example.phone_store.repository.review.IProductReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductReviewService implements IProductReviewService {
    @Autowired
    private IProductReviewRepository productReviewRepository;

    @Override
    public Page<ProductReviews> display(Pageable pageable, Integer productId) {
        return productReviewRepository.findAllByProducts_ProductId(pageable, productId);
    }

    @Override
    public void add(ProductReviews productReviews) {
        productReviewRepository.save(productReviews);
    }
}
