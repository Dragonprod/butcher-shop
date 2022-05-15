package shop.butcher.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import shop.butcher.backend.dto.request.CategoryRequest;
import shop.butcher.backend.dto.response.MessageResponse;
import shop.butcher.backend.entity.Category;
import shop.butcher.backend.entity.Product;
import shop.butcher.backend.entity.Role;
import shop.butcher.backend.entity.User;
import shop.butcher.backend.enums.RoleEnum;
import shop.butcher.backend.repository.CategoryRepository;
import shop.butcher.backend.repository.ProductRepository;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    ProductRepository productRepository;

    @GetMapping("/")
    public List<Category> getCategories() {
        return categoryRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    @PostMapping("/")
    public ResponseEntity<?> createCategory(@Valid @RequestBody CategoryRequest categoryRequest) {
        if (categoryRepository.existsByName(categoryRequest.getName())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Name is already in use!"));
        }

        Category category = new Category(categoryRequest.getName());
        Set<String> strProducts = categoryRequest.getProducts();
        Set<Product> products = new HashSet<>();

        if (strProducts != null) {
            strProducts.forEach(product -> {
                Product productObject = productRepository.findByName(product)
                        .orElseThrow(() -> new RuntimeException("Error: Product is not found."));
                products.add(productObject);
            });
            category.setProducts(products);
        }

        categoryRepository.save(category);

        return ResponseEntity.ok(new MessageResponse("Category added successfully!"));
    }

    @GetMapping("/{id}")
    public Category getCategory(@PathVariable("id") Long id) {
        return categoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Error: Category is not found."));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable("id") Long id) {
        categoryRepository.deleteById(id);
        return ResponseEntity.ok(new MessageResponse("Product with id " + id + " deleted successfully"));
    }
}
