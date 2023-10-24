package com.example.phone_store.controller.order;

import com.example.phone_store.model.OrderDetails;
import com.example.phone_store.service.order.IOrderDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/order-detail")
public class OrderDetailsController {
    @Autowired
    private IOrderDetailsService orderDetailsService;
    @PostMapping("")
    @ResponseBody
    public ResponseEntity add(@RequestBody OrderDetails orderDetails){
        orderDetailsService.add(orderDetails);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
