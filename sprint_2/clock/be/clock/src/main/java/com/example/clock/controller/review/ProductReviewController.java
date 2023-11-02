package com.example.clock.controller.review;

import com.example.clock.model.ProductReviews;
import com.example.clock.service.review.IProductReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
    @GetMapping("/{productId}")
    @ResponseBody
    public ResponseEntity displayPage(@PageableDefault(size = 8, sort = "reviewId", direction = Sort.Direction.DESC )
                                          Pageable pageable, @PathVariable("productId") Integer productId){
        return new ResponseEntity<>(productReviewService.display(pageable, productId), HttpStatus.OK);
    }
    @PostMapping("")
    @ResponseBody
    public ResponseEntity add(@RequestBody ProductReviews productReviews){
        productReviewService.add(productReviews);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
