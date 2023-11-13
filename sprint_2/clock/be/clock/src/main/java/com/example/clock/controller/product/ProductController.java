package com.example.clock.controller.product;


import com.example.clock.service.product.IProductImagesService;
import com.example.clock.service.product.IProductService;
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
    public ResponseEntity<?> display(@PathVariable("id") int id) {
        return new ResponseEntity<>(productService.findProductById(id), HttpStatus.OK);
    }

    @GetMapping("/order")
    @ResponseBody
    public ResponseEntity displayByOrder() {
        return new ResponseEntity<>(productService.displayAllByQuantityOrder(), HttpStatus.OK);
    }

    @GetMapping("/page")
    @ResponseBody
    public ResponseEntity displayPage(@PageableDefault(size = 8, sort = "productId", direction = Sort.Direction.DESC) Pageable pageable) {
        return new ResponseEntity<>(productService.displayList(pageable), HttpStatus.OK);
    }

    @GetMapping("")
    @ResponseBody
    public ResponseEntity findAllByName(@PageableDefault(size = 8, sort = "product_id", direction = Sort.Direction.DESC)
                                        Pageable pageable, @RequestParam(value = "name",
            defaultValue = "") String name, @RequestParam(value = "brands",
            defaultValue = "") String brands, @RequestParam(value = "minPrice",
            defaultValue = "") String minPrice, @RequestParam(value = "maxPrice",
            defaultValue = "") String maxPrice, @RequestParam(value = "color",
            defaultValue = "") String color, @RequestParam(value = "categories",
            defaultValue = "") String categories) {
        return new ResponseEntity<>(productService.search(name, brands, color, categories, minPrice, maxPrice, pageable), HttpStatus.OK);
    }
}
