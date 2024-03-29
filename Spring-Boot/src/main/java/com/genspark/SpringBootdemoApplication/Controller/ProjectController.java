package com.genspark.SpringBootdemoApplication.Controller;

import com.genspark.SpringBootdemoApplication.Entity.Project;
import com.genspark.SpringBootdemoApplication.Entity.Users;
import com.genspark.SpringBootdemoApplication.Service.ProjectService;
import com.genspark.SpringBootdemoApplication.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class ProjectController {
    @Autowired
    private ProjectService projectService;
    @Autowired
    private UserService userService;

    @GetMapping("/")
    public String home(@RequestParam(value = "str", defaultValue = "Good Morning!") String str)
    {
        return "<HTML><H1>Welcome to Project Application</H1><HTML>"+ str;
    }

    @GetMapping("/authentication")
    public boolean login(){
      return true;
    }

    @GetMapping("/projects")
    public List<Project> getProjects(){
        return this.projectService.getAllProject();
    }
    @GetMapping("/{userID}/projects")
    public List<Project> getProjectsByID(@PathVariable String userID){
      return this.projectService.findAllByUid(Integer.parseInt(userID));
    }
    @GetMapping("/projects/{projectID}")
    public Project getProject(@PathVariable String projectID){
        return this.projectService.getProjectById(Integer.parseInt(projectID));
    }
    @PostMapping("/projects")
    public Project addProject(@RequestBody Project project){
        return this.projectService.addProject(project);
    }
    @PutMapping("/projects")
    public Project updateProject(@RequestBody Project project){
        return this.projectService.updateProject(project);
    }
    @DeleteMapping("/projects/{projectID}")
    public String deleteProject(@PathVariable String projectID){
        return this.projectService.deleteProjectById(Integer.parseInt(projectID));
    }

    @GetMapping("/users")
    List<Users> getAllUsers(){
      return this.userService.getAllUsers();
    }

    @GetMapping("/users/id/{userID}")
    public Users getUserById(@PathVariable int userID){
      return this.userService.getUserById(userID);
    }
    @GetMapping("/users/{username}")
    public Users getUserByUsername(@PathVariable String username){
      //If there is no username present, the value return null
      return this.userService.getUserByUsername(username);
    }
    @PostMapping("/users")
    public Users addUser(@RequestBody Users u){
      System.out.println("ADDING USER: "+u.toString());
      return this.userService.addUser(u);
    }
    @PutMapping("/users")
    public Users updateUser(@RequestBody Users user){
      return this.userService.updateUser(user);
    }
    @DeleteMapping("/users/{userID}")
    public String  deleteUserById(@PathVariable int userID){
      return this.userService.deleteUserById(userID);
    }

}
