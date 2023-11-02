//package com.example.clock.controller.cartdetail;
//
//import com.example.phone_store.model.CartDetails;
//import com.example.phone_store.model.ProductProjection;
//import com.example.phone_store.service.cartdetail.ICartDetailService;
//import com.example.phone_store.service.product.IProductService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//@RestController
//@CrossOrigin("*")
//@RequestMapping("/api/cart")
//public class CartDetailController {
//    @Autowired
//    private ICartDetailService cartDetailService;
//    @Autowired
//    private IProductService productService;
//
//    @PostMapping("/add")
//    public ResponseEntity<?> addToCartFromHomeAndDetails(@RequestBody CartDetails cartDetails) {
//        if (cartDetailService.findByProducts(cartDetails.getProducts().getProductId()) == null) {
//            cartDetailService.add(cartDetails);
//            return new ResponseEntity<>(HttpStatus.OK);
//        }
//        return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
//    }
//    @PostMapping("/addd")
//    public ResponseEntity<?> addToCartFromCart(@RequestBody CartDetails cartDetails) {
////        if (cartDetailService.findByProducts(cartDetails.getProducts().getProductId()) == null) {
//            cartDetailService.add(cartDetails);
//            return new ResponseEntity<>(HttpStatus.OK);
////        }
////        return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<?> display(@PathVariable("id") Integer id) {
//        return new ResponseEntity<>(cartDetailService.findCartByAccountId(id), HttpStatus.OK);
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<?> delete(@PathVariable("id") Integer id) {
//        cartDetailService.delete(id);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
//
//    @PostMapping("/delete")
//    public ResponseEntity<?> clearSeveralProducts(@RequestBody List<Integer> deletedCartIDs) {
//        if (!deletedCartIDs.isEmpty()) {
//            for (Integer cartId : deletedCartIDs) {
//                cartDetailService.delete(cartId);
//            }
//            return new ResponseEntity<>(HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
//        }
//    }
//
//    @GetMapping("/check-quantity")
//    public ResponseEntity<?> checkQuantity(@RequestParam("productId") Integer productId,
//                                           @RequestParam("inputQuantity") Integer inputQuantity) {
//        ProductProjection med = productService.findProductById(productId);
//        if (med.getQuantity() >= inputQuantity) {
//            return new ResponseEntity<>(HttpStatus.OK);
//        }
//        return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
//    }
//
//    @PostMapping("/{id}")
//    public ResponseEntity<?> checkCart(@PathVariable("id") Integer id) {
//        if (cartDetailService.findByProducts(id) == null) {
//            return new ResponseEntity<>(HttpStatus.OK);
//        }
//        return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
//    }
//}
