package com.example.phone_store.controller.review;

import com.example.phone_store.model.ProductReviews;
import com.example.phone_store.service.review.IProductReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/review")
public class ProductReviewController {
    @Autowired
    private IProductReviewService productReviewService;
    @GetMapping("")
    @ResponseBody
    public ResponseEntity displayPage(@PageableDefault(size = 8) Pageable pageable){
        return new ResponseEntity<>(productReviewService.display(pageable), HttpStatus.OK);
    }
    @PostMapping("")
    @ResponseBody
    public ResponseEntity add(@RequestBody ProductReviews productReviews){
        productReviewService.add(productReviews);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
