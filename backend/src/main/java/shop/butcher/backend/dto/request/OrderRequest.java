package shop.butcher.backend.dto.request;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.Map;

public class OrderRequest {
    @NotBlank
    private Long userId;

    @NotBlank
    private Double totalSum;

    @NotBlank
    private LocalDateTime createdAt;

    @NotBlank
    private Map<Integer, Integer> productsWithAmount;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
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

    public Map<Integer, Integer> getProductsWithAmount() {
        return productsWithAmount;
    }

    public void setProductsWithAmount(Map<Integer, Integer> productsWithAmount) {
        this.productsWithAmount = productsWithAmount;
    }
}
