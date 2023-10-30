package com.example.phone_store.controller.product;

import com.example.phone_store.model.Products;
import com.example.phone_store.service.product.IProductImagesService;
import com.example.phone_store.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("*")
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private IProductService productService;
    @Autowired
    private IProductImagesService productImagesService;
    @GetMapping("/{id}")
    @ResponseBody
    public ResponseEntity<?> display(@PathVariable("id") int id){
        return new ResponseEntity<>(productService.findProductById(id), HttpStatus.OK);
    }

    @GetMapping("/order")
    @ResponseBody
    public ResponseEntity displayPage(){
        return new ResponseEntity<>(productService.displayAllByQuantityOrder(), HttpStatus.OK);
    }
    @GetMapping("")
    @ResponseBody
    public ResponseEntity findAllByName(@PageableDefault(size = 8, sort = "product_id", direction = Sort.Direction.DESC )Pageable pageable, @RequestParam(value = "modelName",
            defaultValue = "") String modelName, @RequestParam(value = "productTypes",
            defaultValue = "") String productTypes, @RequestParam(value = "minPrice",
            defaultValue = "") String minPrice, @RequestParam(value = "maxPrice",
            defaultValue = "") String maxPrice, @RequestParam(value = "phoneBrands",
            defaultValue = "") String phoneBrands){
        return new ResponseEntity<>(productService.search( modelName, productTypes, minPrice, maxPrice, phoneBrands, pageable), HttpStatus.OK);
    }
}
