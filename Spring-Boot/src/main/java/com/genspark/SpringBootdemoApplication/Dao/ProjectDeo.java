package com.genspark.SpringBootdemoApplication.Dao;


import com.genspark.SpringBootdemoApplication.Entity.Project;
import com.genspark.SpringBootdemoApplication.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectDeo extends JpaRepository<Project, Integer> {
  List<Project> findAllByUid(int id);
}
