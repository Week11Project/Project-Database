import { Component } from '@angular/core';
import { ProjectsService } from './services/projects.service';
import { Project } from './model/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  // projects?: Project[];
  // filteredProjects?: Project[];
  // tags?: string[];

  // constructor(private projectsService: ProjectsService) {
  //   this.projectsService.findAll().subscribe((data) => {
  //     const t : Set<string> = new Set<string>();

  //     this.projects = data;
  //     this.filteredProjects = [...this.projects];
      
  //     this.projects?.forEach(project => project.skills?.split(", ").forEach(s => t.add(s)));

  //     this.tags = Array.from(t.values());
  //   });
  // }
}
