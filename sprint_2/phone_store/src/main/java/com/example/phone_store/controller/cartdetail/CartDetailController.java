package com.example.phone_store.controller.cartdetail;

import com.example.phone_store.model.CartDetails;
import com.example.phone_store.service.cartdetail.ICartDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/cart")
public class CartDetailController {
    @Autowired
    private ICartDetailService cartDetailService;

    @PostMapping("/add")
    public ResponseEntity<?> addToCartFromHomeAndDetails(@RequestBody CartDetails cartDetails) {
//        if (!iAppUserService.existsById(appUserId) || !iMedicineService.existsByIdAndFlagDeletedIsFalse(medicineId)) {
//            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
//        } else {
        cartDetailService.add(cartDetails);
        return new ResponseEntity<>(HttpStatus.OK);
//        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> display(@PathVariable("id") Integer id) {
        return new ResponseEntity<>(cartDetailService.findCartByAccountId(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id) {
        cartDetailService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PostMapping("/delete")
    public ResponseEntity<?> clearSeveralProducts(@RequestBody List<Integer> deletedCartIDs) {
        if (!deletedCartIDs.isEmpty()) {
            for (Integer cartId : deletedCartIDs) {
                cartDetailService.delete(cartId);
            }
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
    }
}
