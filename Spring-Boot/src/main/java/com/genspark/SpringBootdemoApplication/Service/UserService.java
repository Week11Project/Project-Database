package com.genspark.SpringBootdemoApplication.Service;

import com.genspark.SpringBootdemoApplication.Entity.Project;
import com.genspark.SpringBootdemoApplication.Entity.Users;

import java.util.List;

public interface UserService {
  List<Users> getAllUsers();
  Users getUserById(int userID);
  Users getUserByUsername(String username);
  Users addUser(Users user);
  Users updateUser(Users user);
  String deleteUserById(int userID);

}
