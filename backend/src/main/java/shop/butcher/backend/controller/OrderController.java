package shop.butcher.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import shop.butcher.backend.dto.request.OrderRequest;
import shop.butcher.backend.dto.response.MessageResponse;
import shop.butcher.backend.entity.*;
import shop.butcher.backend.repository.CategoryRepository;
import shop.butcher.backend.repository.OrderRepository;
import shop.butcher.backend.repository.ProductRepository;
import shop.butcher.backend.repository.UserRepository;

import javax.validation.Valid;
import java.util.*;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    ProductRepository productRepository;

    @GetMapping("")
    public List<Order> getOrders() {
        return orderRepository.findAll();
    }

    @GetMapping("/sorted")
    public List<Order> getOrdersSorted(@RequestParam Boolean isComplete) {
        if (isComplete) {
            return orderRepository.findAllByIsComplete(isComplete);
        } else {
            return orderRepository.findAllByIsComplete(isComplete);
        }
    }

    @PostMapping("")
    public ResponseEntity<?> createOrder(@Valid @RequestBody OrderRequest orderRequest) {
        User user = userRepository.findById(orderRequest.getUserId())
                .orElseThrow(() -> new RuntimeException("Error: User is not found."));
        Order order = new Order(orderRequest.getTotalSum(), orderRequest.getCreatedAt());
        Map<Integer, Integer> productsIdsWithAmount = orderRequest.getProductsWithAmount();
        Map<Integer, Product> productsWithAmount = new HashMap<Integer, Product>();
        for (var entry : productsIdsWithAmount.entrySet()) {
            Product product = productRepository.findById(entry.getKey().longValue())
                    .orElseThrow(() -> new RuntimeException("Error: Product is not found."));
            productsWithAmount.put(entry.getValue(), product);
        }
        order.setUser(user);
        order.setProductsWithAmount(productsWithAmount);
        orderRepository.save(order);
        return ResponseEntity.ok(new MessageResponse("Order created successfully!"));
    }

    @PostMapping("/{id}/complete")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> completeOrder(@PathVariable("id") Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Error: Order is not found."));
        order.setComplete(true);
        orderRepository.save(order);
        return ResponseEntity.ok(new MessageResponse("Order completed successfully!"));
    }

    @GetMapping("/user/{userid}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public Set<Order> getOrderByUserId(@PathVariable("userid") Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("Error: User is not found."));
        return user.getOrders();
    }

    @GetMapping("/{id}")
    public Order getOrder(@PathVariable("id") Long id) {
        return orderRepository.findById(id).orElseThrow(() -> new RuntimeException("Error: Order is not found."));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteOrder(@PathVariable("id") Long id) {
        orderRepository.deleteById(id);
        return ResponseEntity.ok(new MessageResponse("Order with id " + id + " deleted successfully"));
    }
}
