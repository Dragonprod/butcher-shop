package shop.butcher.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import shop.butcher.backend.dto.request.OrderRequest;
import shop.butcher.backend.dto.request.ProductReequest;
import shop.butcher.backend.dto.response.MessageResponse;
import shop.butcher.backend.entity.Category;
import shop.butcher.backend.entity.Order;
import shop.butcher.backend.entity.Product;
import shop.butcher.backend.repository.CategoryRepository;
import shop.butcher.backend.repository.OrderRepository;
import shop.butcher.backend.repository.ProductRepository;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    OrderRepository orderRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    ProductRepository productRepository;

    @GetMapping("/")
    public List<Order> getOrders() {
        return orderRepository.findAll();
    }

    @PostMapping("/")
    public ResponseEntity<?> createOrder(@Valid @RequestBody OrderRequest orderRequest) {
        // TODO: Add logic
        Order order = new Order();
        orderRepository.save(order);
        return ResponseEntity.ok(new MessageResponse("Order created successfully!"));
    }

    @GetMapping("/{id}")
    public Order getOrder(@PathVariable("id") Long id) {
        return orderRepository.findById(id).orElseThrow(() -> new RuntimeException("Error: Order is not found."));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable("id") Long id) {
        orderRepository.deleteById(id);
        return ResponseEntity.ok(new MessageResponse("Order with id " + id + " deleted successfully"));
    }
}
