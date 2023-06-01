import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../model/project';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  userName: string = "tektutorialshub"
  projects: Project[] | undefined;
 
  loading: boolean = false;
  errorMessage: string | undefined;
  

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.projectsService.findAll().subscribe((data) => {
      this.projects = data;
    });
  }
}
