package shop.butcher.backend.dto.request;

import javax.validation.constraints.NotBlank;
import java.util.Set;

public class CategoryRequest {
    @NotBlank
    private String name;

    @NotBlank
    private Set<String> products;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<String> getProducts() {
        return products;
    }

    public void setProducts(Set<String> products) {
        this.products = products;
    }
}
