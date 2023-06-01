package com.genspark.SpringBootdemoApplication.Dao;

import com.genspark.SpringBootdemoApplication.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<Users, Integer> {
}
