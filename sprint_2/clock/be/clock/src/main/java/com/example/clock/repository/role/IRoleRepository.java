package com.example.clock.repository.role;

import com.example.clock.model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRoleRepository extends JpaRepository<Roles,Integer> {
}
