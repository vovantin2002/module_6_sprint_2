package com.example.clock.controller.order;

import com.example.clock.model.Orders;
import com.example.clock.service.order.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    private IOrderService orderService;
    @PostMapping("")
    @ResponseBody
    public ResponseEntity add(@RequestBody Orders orders){
        orderService.add(orders);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
