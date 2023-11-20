package com.example.clock.repository.product;


import com.example.clock.model.ProductProjection;
import com.example.clock.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IProductRepository extends JpaRepository<Products, Integer> {
    @Query(value = "SELECT p.product_id, p.name, p.description, p.dial_color as dial_Color, p.price, p.original_price " +
            "as original_Price, p.quantity, p.glasses, p.international_warranty,\n" +
            "       p.model_number, p.glass_material, p.movement_type, p.dial_diameter,GROUP_CONCAT(i.image_url) AS image_Url,\n" +
            "       p.flag_deleted, p.dial_thickness, p.functions, p.origin, p.categories_id as categories, p.brand_id as brands\n" +
//            "r.rating as reviews" +
            "FROM Products p JOIN product_images i " +
//            "join product_reviews r" +
            "WHERE (p.name LIKE CONCAT('%', :name, '%') or :name='')" +
            "AND (:brands ='' OR p.brand_id = :brands) " +
            "AND (:color ='' OR p.dial_color = :color) " +
            "AND (:categories ='' OR p.categories_id = :categories) " +
            "AND (:minPrice ='' OR :maxPrice ='' OR p.price BETWEEN :minPrice AND :maxPrice) " +
            "GROUP BY p.product_id",
            nativeQuery = true)
    Page<ProductProjection> search(
            @Param("name") String name,
            @Param("brands") String brands,
            @Param("color") String color,
            @Param("categories") String categories,
            @Param("minPrice") String minPrice,
            @Param("maxPrice") String maxPrice,
            Pageable pageable
    );

    @Query(value = "SELECT p.product_id, p.name, p.description, p.dial_color as dial_Color, p.price, p.quantity, p.glasses, p.international_warranty,\n" +
            "       p.model_number, p.glass_material, p.movement_type, p.dial_diameter,GROUP_CONCAT(i.image_url) AS image_Url,\n" +
            "       p.flag_deleted, p.dial_thickness, p.functions, p.origin, p.categories_id as categories, p.brand_id as brands\n" +
            "FROM Products p\n" +
            "JOIN product_images i ON p.product_id = i.product_id\n" +
            "JOIN order_details o ON p.product_id = o.product_id\n" +
            "GROUP BY p.product_id\n" +
            "ORDER BY SUM(o.quantity) DESC\n" +
            "LIMIT 4", nativeQuery = true)
    List<ProductProjection> displayAllByQuantityOrder();

    @Query(value = "SELECT p.product_id, p.name, p.description, p.dial_color as dial_Color, p.price, p.original_price " +
            "as original_Price, p.quantity, p.glasses, p.international_warranty,\n" +
            "       p.model_number, p.glass_material, p.movement_type, p.dial_diameter,GROUP_CONCAT(i.image_url) AS image_Url,\n" +
            "       p.flag_deleted, p.dial_thickness, p.functions, p.origin, p.categories_id as categories, b.brand_name as brands\n" +
            "FROM products p  JOIN product_images i join brands b on b.brand_id = p.brand_id WHERE p.flag_deleted = false AND p.product_id = :id", nativeQuery = true)
    ProductProjection findProductById(@Param("id") Integer id);
    @Transactional
    @Modifying
    @Query(value = "UPDATE products p SET p.quantity = p.quantity - :quantity WHERE (product_id = :productId)", nativeQuery = true)
    void reduceQuantityProduct(@Param("quantity")Integer quantity, @Param("productId")Integer productId);
}
