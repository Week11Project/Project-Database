package com.genspark.SpringBootdemoApplication.Service;

import com.genspark.SpringBootdemoApplication.Entity.Project;

import java.util.List;

public interface ProjectService {

    List<Project> getAllProject();
    List<Project> findAllByUid(int userID);
    Project getProjectById(int projectID);
    Project addProject(Project project);
    Project updateProject(Project project);
    String deleteProjectById(int projectID);

}
