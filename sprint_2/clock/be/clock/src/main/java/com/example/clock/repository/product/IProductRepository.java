package com.example.clock.repository.product;


import com.example.clock.model.ProductProjection;
import com.example.clock.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductRepository extends JpaRepository<Products, Integer> {
    @Query(value = "SELECT p.product_id, p.model_name, p.color, p.price, p.quantity, p.screen_size, p.camera_resolution,\n" +
            "       p.storage_capacity, p.ram_capacity, p.battery_capacity, p.operating_system,GROUP_CONCAT(i.image_url) AS image_Url,\n" +
            "       p.flag_deleted, p.sim, p.launch_time, p.origin, p.product_type_id as product_types, p.brand_id as phone_brands\n" +
            "FROM Products p JOIN product_images i " +
            "WHERE (p.model_name LIKE CONCAT('%', :modelName, '%') or :modelName='')" +
            "AND (:productTypes ='' OR p.product_type_id = :productTypes) " +
            "AND (:minPrice ='' OR :maxPrice ='' OR p.price BETWEEN :minPrice AND :maxPrice) " +
            "AND (p.brand_id = :phoneBrands or :phoneBrands ='') " +
            "GROUP BY p.product_id",
            nativeQuery = true)
    Page<ProductProjection> findAllByModelNameContainingAndProductTypesAndPriceBetweenAndPhoneBrands(
            @Param("modelName") String modelName,
            @Param("productTypes") String productTypes,
            @Param("minPrice") String minPrice,
            @Param("maxPrice") String maxPrice,
            @Param("phoneBrands") String phoneBrands,
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
            "LIMIT 4;", nativeQuery = true)
    List<ProductProjection> displayAllByQuantityOrder();

    @Query(value = "SELECT p.product_id, p.name, p.description, p.dial_color as dial_Color, p.price, p.quantity, p.glasses, p.international_warranty,\n" +
            "       p.model_number, p.glass_material, p.movement_type, p.dial_diameter,GROUP_CONCAT(i.image_url) AS image_Url,\n" +
            "       p.flag_deleted, p.dial_thickness, p.functions, p.origin, p.categories_id as categories, b.brand_name as brands\n" +
            "FROM products p  JOIN product_images i join brands b on b.brand_id = p.brand_id WHERE p.flag_deleted = false AND p.product_id = :id", nativeQuery = true)
    ProductProjection findProductById(@Param("id") Integer id);
}
