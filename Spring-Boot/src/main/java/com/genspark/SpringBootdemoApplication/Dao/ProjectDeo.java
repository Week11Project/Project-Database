package com.genspark.SpringBootdemoApplication.Dao;


import com.genspark.SpringBootdemoApplication.Entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectDeo extends JpaRepository<Project, Integer> {
}
