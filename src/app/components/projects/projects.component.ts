import { Component, Input, OnInit } from '@angular/core';
import { RestapiService } from '../../services/restapi';
import { Project } from '../../model/project';
import { ActivatedRoute, Router } from '@angular/router';

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
  admin : boolean = false;
  userid!:any;
  

  constructor(private restapiService: RestapiService, private route: ActivatedRoute,private router: Router) {
    
    const routeid = this.route.snapshot.paramMap.get('userid');
    
    this.userid = sessionStorage.getItem("userid");

    this.restapiService.findAll(routeid).subscribe((data) => {
      const t : Set<string> = new Set<string>();

      this.projects = data;
      this.filteredProjects = [...this.projects];
      
      this.projects?.forEach(project => project.skills?.split(", ").forEach(s => t.add(s)));

      this.tags = Array.from(t.values());
    });
    if(this.userid==routeid){
      this.admin = true;
    }
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
