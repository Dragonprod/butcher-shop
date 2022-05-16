package shop.butcher.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import shop.butcher.backend.entity.Order;


public interface OrderRepository extends JpaRepository<Order, Long> {
}
