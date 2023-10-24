package com.example.phone_store.repository.product;

import com.example.phone_store.model.ProductProjection;
import com.example.phone_store.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductRepository extends JpaRepository<Products, Integer> {
    //    Page<Products> findAllByModelNameContainingAndProductTypesAndPriceBetweenAndPhoneBrands(
//            String modelName, String productTypes, String minPrice, String maxPrice, String phoneBrands, Pageable pageable
//    );
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

    @Query(value = "SELECT p.product_id, p.model_name, p.color, p.price, p.quantity, p.screen_size, p.camera_resolution,\n" +
            "       p.storage_capacity, p.ram_capacity, p.battery_capacity, p.operating_system, \n" +
            "       GROUP_CONCAT(i.image_url) AS image_Url,\n" +
            "       p.flag_deleted, p.sim, p.launch_time, p.origin, p.product_type_id AS product_types,\n" +
            "       p.brand_id AS phone_brands\n" +
            "FROM Products p\n" +
            "JOIN product_images i ON p.product_id = i.product_id\n" +
            "JOIN order_details o ON p.product_id = o.product_id\n" +
            "GROUP BY p.product_id\n" +
            "ORDER BY SUM(o.quantity) DESC\n" +
            "LIMIT 4;", nativeQuery = true)
    List<ProductProjection> displayAllByQuantityOrder();

    @Query(value = "SELECT p.product_id, p.model_name, p.color, p.price, p.quantity, p.screen_size, p.camera_resolution,\n" +
            "       p.storage_capacity, p.ram_capacity, p.battery_capacity, p.operating_system,GROUP_CONCAT(i.image_url) AS image_Url,\n" +
            "       p.flag_deleted, p.sim, p.launch_time, p.origin, p.product_type_id as product_types, p.brand_id as phone_brands\n" +
            "FROM products p  JOIN product_images i WHERE p.flag_deleted = false AND p.product_id = :id", nativeQuery = true)
    ProductProjection findProductById(@Param("id") Integer id);
}
