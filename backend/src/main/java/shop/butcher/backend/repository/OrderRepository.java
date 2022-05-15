package shop.butcher.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import shop.butcher.backend.entity.Order;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
