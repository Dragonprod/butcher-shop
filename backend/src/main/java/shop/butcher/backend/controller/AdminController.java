package shop.butcher.backend.controller;

import org.springframework.web.bind.annotation.*;
import shop.butcher.backend.entity.Category;
import shop.butcher.backend.entity.Order;
import shop.butcher.backend.entity.Product;
import shop.butcher.backend.entity.User;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @GetMapping("/users")
    public List<User> getUsers() {
        return new ArrayList<>();
    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable("id") Long id) {
        return new User();
    }

    @GetMapping("/orders")
    public List<Order> getOrders() {
        return new ArrayList<>();
    }

    @GetMapping("/orders/{id}")
    public List<Order> getOrder(@PathVariable("id") Long id) {
        return new ArrayList<>();
    }

    @GetMapping("/products")
    public List<Product> getProducts() {
        return new ArrayList<>();
    }

    @GetMapping("/products/{id}")
    public List<Product> getProduct(@PathVariable("id") Long id) {
        return new ArrayList<>();
    }

    @GetMapping("/categories")
    public List<Category> getCategories() {
        return new ArrayList<>();
    }

    @GetMapping("/categories/{id}")
    public List<Category> getCategory(@PathVariable("id") Long id) {
        return new ArrayList<>();
    }
}
