package com.example.phone_store.repository.product;

import com.example.phone_store.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IProductRepository extends JpaRepository<Products, Integer> {
//    Page<Products> findAllByModelNameContainingAndProductTypesAndPriceBetweenAndPhoneBrands(
//            String modelName, String productTypes, String minPrice, String maxPrice, String phoneBrands, Pageable pageable
//    );
@Query(value = "SELECT * FROM Products p " +
//        "JOIN Product_Types pt ON p.product_type_id = pt.product_type_id " +
//        "JOIN Phone_Brands pb ON p.brand_id = pb.brand_id " +
        "WHERE (p.model_name LIKE CONCAT('%', :modelName, '%') or :modelName='')" +
        "AND (:productTypes ='' OR p.product_type_id = :productTypes) " +
        "AND (:minPrice ='' OR :maxPrice ='' OR p.price BETWEEN :minPrice AND :maxPrice) " +
        "AND (p.brand_id = :phoneBrands or :phoneBrands ='')",
//        countQuery = "SELECT COUNT(p) FROM Products p " +
//                "JOIN Product_Types pt ON p.product_type_id = pt.product_type_id " +
//                "JOIN Phone_Brands pb ON p.brand_id = pb.brand_id " +
//                "WHERE p.model_name LIKE CONCAT('%', :modelName, '%') " +
//                "AND (:productTypes IS NULL OR pt.product_type_name = :productTypes) " +
//                "AND (:minPrice IS NULL OR :maxPrice IS NULL OR p.price BETWEEN :minPrice AND :maxPrice) " +
//                "AND pb.brand_name = :phoneBrands",
        nativeQuery = true)
Page<Products> findAllByModelNameContainingAndProductTypesAndPriceBetweenAndPhoneBrands(
        @Param("modelName") String modelName,
        @Param("productTypes") String productTypes,
        @Param("minPrice") String minPrice,
        @Param("maxPrice") String maxPrice,
        @Param("phoneBrands") String phoneBrands,
        Pageable pageable
);
}
