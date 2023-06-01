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

  public Users() {

  }
  public Users(String username, String password, String role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  public int getUser_id() {
    return user_id;
  }

  public void setUser_id(int user_id) {
    this.user_id = user_id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }
}
