package shop.butcher.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import shop.butcher.backend.entity.Product;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Optional<Product> findByName(String name);
    Boolean existsByName(String name);
}
