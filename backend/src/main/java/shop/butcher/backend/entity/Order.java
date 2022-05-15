package shop.butcher.backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Map;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    @JsonBackReference
    private User user;

    @Column(name = "total_sum")
    private Double totalSum;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "is_complete")
    private Boolean isComplete;

    @OneToMany(cascade = CascadeType.ALL)
//    @JoinTable(name = "order_product_mapping",
//            joinColumns = {@JoinColumn(name = "order_id", referencedColumnName = "id")},
//            inverseJoinColumns = {@JoinColumn(name = "product_id", referencedColumnName = "id")})
    @JsonManagedReference
    private Map<Integer, Product> productsWithAmount;

    public Order() {
    }

    public Order(Double totalSum, LocalDateTime createdAt) {
        this.totalSum = totalSum;
        this.createdAt = createdAt;
        this.isComplete = false;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Double getTotalSum() {
        return totalSum;
    }

    public void setTotalSum(Double totalSum) {
        this.totalSum = totalSum;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Boolean getComplete() {
        return isComplete;
    }

    public void setComplete(Boolean complete) {
        isComplete = complete;
    }

    public Map<Integer, Product> getProductsWithAmount() {
        return productsWithAmount;
    }

    public void setProductsWithAmount(Map<Integer, Product> productsWithAmount) {
        this.productsWithAmount = productsWithAmount;
    }
}
