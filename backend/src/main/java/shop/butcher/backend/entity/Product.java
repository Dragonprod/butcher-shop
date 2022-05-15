package shop.butcher.backend.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name="category_id", nullable=false)
    @JsonBackReference
    private Category category;

    @Column(name = "name")
    private String name;

    @Column(name = "description", columnDefinition="TEXT")
    private String description;

    @Column(name = "photo_url")
    private String photoUrl;

    @Column(name = "weight")
    private double weight;

    @Column(name = "expiration_date")
    private int expirationDate;

    @Column(name = "storage_conditions")
    private String storageConditions;

    @Column(name = "composition", columnDefinition="TEXT")
    private String composition;

    @Column(name = "price")
    private double price;

    public Product() {
    }

    public Product(String name, String description, String photoUrl, double weight, int expirationDate, String storageConditions, String composition, double price) {
        this.name = name;
        this.description = description;
        this.photoUrl = photoUrl;
        this.weight = weight;
        this.expirationDate = expirationDate;
        this.storageConditions = storageConditions;
        this.composition = composition;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public int getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(int expirationDate) {
        this.expirationDate = expirationDate;
    }

    public String getStorageConditions() {
        return storageConditions;
    }

    public void setStorageConditions(String storageConditions) {
        this.storageConditions = storageConditions;
    }

    public String getComposition() {
        return composition;
    }

    public void setComposition(String composition) {
        this.composition = composition;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
