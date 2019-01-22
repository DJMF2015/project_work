package com.files.homework.folders.repository;

import com.files.homework.folders.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
