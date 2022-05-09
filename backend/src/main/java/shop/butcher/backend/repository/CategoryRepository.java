package shop.butcher.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import shop.butcher.backend.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
