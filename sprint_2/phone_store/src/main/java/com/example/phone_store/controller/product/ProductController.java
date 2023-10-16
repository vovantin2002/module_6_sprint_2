package com.example.phone_store.controller.product;

import com.example.phone_store.model.Products;
import com.example.phone_store.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private IProductService productService;
    @GetMapping("/{id}")
    @ResponseBody
    public ResponseEntity<Products> display(@PathVariable("id") int id){
        return new ResponseEntity<>(productService.findProductById(id), HttpStatus.OK);
    }
    @GetMapping("")
    @ResponseBody
    public ResponseEntity displayPage(@PageableDefault(size = 8)Pageable pageable){
        return new ResponseEntity<>(productService.displayList(pageable), HttpStatus.OK);
    }
}
