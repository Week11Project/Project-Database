package com.genspark.SpringBootdemoApplication.Service;

import com.genspark.SpringBootdemoApplication.Dao.ProjectDeo;
import com.genspark.SpringBootdemoApplication.Entity.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectServiceImpl implements ProjectService {
    @Autowired
    private ProjectDeo projectDeo;

    @Override
    public List<Project> getAllProject() {
        return this.projectDeo.findAll();
    }
    @Override
    public List<Project> findAllByUid(int userID) {
      return this.projectDeo.findAllByUid(userID);
    }

    @Override
    public Project getProjectById(int projectID) {
        Optional <Project> p = this.projectDeo.findById(projectID);
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
}
