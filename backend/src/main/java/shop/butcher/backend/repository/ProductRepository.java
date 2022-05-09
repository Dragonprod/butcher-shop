package shop.butcher.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import shop.butcher.backend.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
