package com.genspark.SpringBootdemoApplication.Service;

import com.genspark.SpringBootdemoApplication.Dao.ProjectDeo;
import com.genspark.SpringBootdemoApplication.Dao.UserDao;
import com.genspark.SpringBootdemoApplication.Entity.Project;
import com.genspark.SpringBootdemoApplication.Entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

  @Autowired
  private UserDao userDao;
  @Autowired
  public PasswordEncoder passwordEncoder;

  @Override
  public List<Users> getAllUsers() {
    return this.userDao.findAll();
  }

  @Override
  public Users getUserById(int userID) {
    Optional<Users> u = this.userDao.findById(userID);
    Users user= null;
    if(u.isPresent()){
       user = u.get();
    }else{
      throw new RuntimeException("User not found for id ::" + userID);
    }
    return user;
  }

  @Override
  public Users getUserByUsername(String username){
    return userDao.findByUsername(username);
  }
  @Override
  public Users addUser(Users user) {
    user.setPassword(passwordEncoder.encode(user.getPassword()));
    return this.userDao.save(user);
  }

  @Override
  public Users updateUser(Users user) {
    Users userFound = null;
    List<Users> list = this.userDao.findAll();

    for(int i=0;i<list.size();i++){
      if(list.get(i).getUsername().equals(user.getUsername())){
        userFound=list.get(i);
      }
    }
    if(userFound==null){
      throw new RuntimeException("Username not found for username :: " + user.getUsername());
    }

    userFound.setPassword(passwordEncoder.encode(user.getPassword()));
    return this.userDao.save(user);

  }

  @Override
  public String deleteUserById(int userID) {
    Users user = this.userDao.getById(userID);
    if(user==null){
      throw new RuntimeException("Username not found for username :: " + user.getUsername());
    }

    this.userDao.deleteById(userID);


    return "Deleted Successfully";
  }


  /**
    @Autowired
    private ProjectDeo projectDeo;

    @Override
    public List<Project> getAllProject() {
      return this.projectDeo.findAll();
    }

    @Override
    public Project getProjectById(int projectID) {
      Optional<Project> p = this.projectDeo.findById(projectID);
      Project project = null;
      if (p.isPresent()){
        project = p.get();
      } else {
        throw new RuntimeException(" Project not found for id :: " + projectID);
      }
      return project;
    }

    @Override
    public Project addProject(Project project) {
      return this.projectDeo.save(project);
    }

    @Override
    public Project updateProject(Project project) {
      return this.projectDeo.save(project);
    }

    @Override
    public String deleteProjectById(int projectID) {
      this.projectDeo.deleteById(projectID);
      return "Deleted Successfully";

    }
    **/
}

