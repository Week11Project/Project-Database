import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project!: Project;
  @Input() index : string = "";
  colorarr : Array<string> = ["primary", "secondary", "info", "danger", "success", "warning"];
  color: string = "primary";

  isGithubHidden : boolean = true;  
  isSiteHidden : boolean = true; 

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
    
    // console.log(this.project)
    this.projectsService.save(this.project);
    if (this.project.github!=null) {
      this.isGithubHidden = false;
    }
    if (this.project.site!=null) {
      this.isSiteHidden = false;
    }
    this.color=this.colorarr[parseInt(this.index)%3]
  }
}

