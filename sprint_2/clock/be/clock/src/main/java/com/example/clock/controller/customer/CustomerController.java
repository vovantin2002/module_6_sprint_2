package com.example.clock.controller.customer;


import com.example.clock.model.Customers;
import com.example.clock.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/customer")
public class CustomerController {
    @Autowired
    private ICustomerService customerService;
    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody Customers customers){
        customerService.add(customers);
        return new ResponseEntity<>( HttpStatus.OK);
    }
    @PatchMapping("")
    public ResponseEntity<?> edit(@RequestBody Customers customers){
        customerService.edit(customers);
        return new ResponseEntity<>( HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> display(@PathVariable("id") Integer id){
        return new ResponseEntity<>(customerService.display(id), HttpStatus.OK);
    }
}
