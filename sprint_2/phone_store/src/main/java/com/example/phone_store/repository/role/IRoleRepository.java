package com.example.phone_store.repository.role;

import com.example.phone_store.model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRoleRepository extends JpaRepository<Roles,Integer> {
}
