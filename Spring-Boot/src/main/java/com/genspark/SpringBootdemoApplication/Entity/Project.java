package com.genspark.SpringBootdemoApplication.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="tbl_projects")
public class Project {
    @Id
    @Column(name="p_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String title;
    private String github;
    private String site;
    private String skills;
    private String description;

    public Project() {
    }

    public Project(int id, String title, String github, String site, String skills, String description) {
        this.id = id;
        this.title = title;
        this.github = github;
        this.site = site;
        this.skills = skills;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGithub() {
        return github;
    }

    public void setGithub(String github) {
        this.github = github;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
