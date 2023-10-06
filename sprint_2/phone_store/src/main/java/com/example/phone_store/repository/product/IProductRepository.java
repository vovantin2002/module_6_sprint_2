package com.example.phone_store.repository.product;

import com.example.phone_store.model.Accounts;
import com.example.phone_store.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductRepository extends JpaRepository<Products,Integer> {
}
