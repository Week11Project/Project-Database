package com.genspark.SpringBootdemoApplication.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="tbl_users")
public class Users {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int user_id;

  private String username;
  private String password;
  private String role;


}
