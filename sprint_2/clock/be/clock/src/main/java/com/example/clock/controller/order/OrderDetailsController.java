package com.example.clock.controller.order;


import com.example.clock.model.OrderDetails;
import com.example.clock.model.OrderRequestDTO;
import com.example.clock.service.order.IOrderDetailsService;
import com.example.clock.service.order.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/order-detail")
public class OrderDetailsController {
    @Autowired
    private IOrderDetailsService orderDetailsService;
    @Autowired
    private IOrderService orderService;

    @PostMapping("")
    @ResponseBody
    public ResponseEntity add(@RequestBody OrderRequestDTO orderRequestDTO) {
        orderService.add(orderRequestDTO.getOrders());
        for (OrderDetails orderDetails : orderRequestDTO.getOrderDetails()) {
            orderDetails.setOrders(orderRequestDTO.getOrders());
            orderDetailsService.add(orderDetails);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @ResponseBody
    public ResponseEntity display(@PageableDefault(size = 8, sort = "orderDetailsId", direction = Sort.Direction.DESC)
                                  Pageable pageable, @PathVariable("id") Integer id) {
        return new ResponseEntity<>(orderDetailsService.display(pageable, id), HttpStatus.OK);
    }
}
