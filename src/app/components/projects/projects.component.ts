import { Component, Input, OnInit } from '@angular/core';
import { RestapiService } from '../../services/restapi';
import { Project } from '../../model/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  @Input() projects?: Project[];
  @Input() filteredProjects?: Project[];
  @Input() tags?: string[];
  searchVaule : string = "";
  filterVaule : string = "";
  admin : boolean = true;
  

  constructor(private restapiService: RestapiService) {
    this.restapiService.findAll().subscribe((data) => {
      const t : Set<string> = new Set<string>();

      this.projects = data;
      this.filteredProjects = [...this.projects];
      
      this.projects?.forEach(project => project.skills?.split(", ").forEach(s => t.add(s)));

      this.tags = Array.from(t.values());
    });
  }
  
  searchProjects(value: string) {
    value=value.toLowerCase();
    if (this.projects !== undefined) {
      this.filteredProjects = [...this.projects.filter(project => (project.title !== undefined) && project.title.toLowerCase().includes(value) || (project.skills !== undefined) && project.skills.toLowerCase().includes(value) || (project.description !== undefined) && project.description.toLowerCase().includes(value))];
    }
  }
  filterProjects(input: string) {
    const values: string[] = input.split(",");
    
    if (this.projects !== undefined) {
        this.filteredProjects = [...this.projects];
      for (let value of values) {
        value=value.toLowerCase();
        this.filteredProjects = [...this.filteredProjects.filter(project => (project.skills !== undefined) && project.skills.toLowerCase().split(", ").includes(value))];
      }
      if(input==""){
        this.filteredProjects = [...this.projects];
      }
    }
  }
}
