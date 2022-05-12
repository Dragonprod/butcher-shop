package shop.butcher.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import shop.butcher.backend.dto.request.ProductReequest;
import shop.butcher.backend.dto.response.MessageResponse;
import shop.butcher.backend.entity.Category;
import shop.butcher.backend.entity.Product;
import shop.butcher.backend.repository.CategoryRepository;
import shop.butcher.backend.repository.ProductRepository;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    ProductRepository productRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping("/")
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    @PostMapping("/")
    public ResponseEntity<?> createProduct(@Valid @RequestBody ProductReequest productRequest) {
        if (productRepository.existsByName(productRequest.getName())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Name is already in use!"));
        }

        Product product = new Product(
                productRequest.getName(),
                productRequest.getDescription(),
                productRequest.getPhotoUrl(),
                productRequest.getWeight(),
                productRequest.getExpirationDate(),
                productRequest.getStorageConditions(),
                productRequest.getComposition(),
                productRequest.getPrice()
        );

        String category = productRequest.getCategory();

        if (category != null) {
            Category categoryObject = categoryRepository.findByName(category)
                    .orElseThrow(() -> new RuntimeException("Error: Category is not found."));
            product.setCategory(categoryObject);
        }

        productRepository.save(product);
        return ResponseEntity.ok(new MessageResponse("Product added successfully!"));
    }

    @GetMapping("/{id}")
    public Product getProduct(@PathVariable("id") Long id) {
        return productRepository.findById(id).orElseThrow(() -> new RuntimeException("Error: Product is not found."));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable("id") Long id) {
        productRepository.deleteById(id);
        return ResponseEntity.ok(new MessageResponse("Product with id " + id + " deleted successfully"));
    }
}
