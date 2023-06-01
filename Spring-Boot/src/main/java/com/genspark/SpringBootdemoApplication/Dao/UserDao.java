package com.genspark.SpringBootdemoApplication.Dao;

import com.genspark.SpringBootdemoApplication.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<Users, Integer> {


  /**
   * For the findBy method to work:
   *  - the method has to start exactly with findBy. the B has to be capitalized
   *  - the word after the findBy has to be a column name. It is case-sensitive, but the first letter can be upper case since it will turn to lower case
   */
  Users findByUsername(String u);
}
