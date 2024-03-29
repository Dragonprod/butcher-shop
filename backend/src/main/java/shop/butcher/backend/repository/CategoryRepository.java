package shop.butcher.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import shop.butcher.backend.entity.Category;

import java.util.Optional;


public interface CategoryRepository extends JpaRepository<Category, Long> {
    Optional<Category> findByName(String name);
    Boolean existsByName(String name);
}
