import { Component, Input } from '@angular/core';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  @Input() project!: Project;
  @Input() index : string = "";
  colorarr : Array<string> = ["primary", "secondary", "info"];
  color: string = "primary";

  isGithubHidden : boolean = true;  
  isSiteHidden : boolean = true; 

  ngOnInit() {
    if (this.project.github!="") {
      this.isGithubHidden = false;
    }
    if (this.project.site!="") {
      this.isSiteHidden = false;
    }
    this.color=this.colorarr[parseInt(this.index)%3]
  }
}

