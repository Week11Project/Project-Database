import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  @Input() index : string = "";
  @Input() title : string = "";
  @Input() github : string = "";
  @Input() site : string = "";  
  @Input() skills : string = "";  
  @Input() decs : string = "";  
  colorarr : Array<string> = ["primary", "secondary", "info"];
  color: string = "primary";

  isGithubHidden : boolean = false;  
  isSiteHidden : boolean = false; 

  ngOnInit() {
    if (this.github=="") {
      this.isGithubHidden = true;
    }
    if (this.site=="") {
      this.isSiteHidden = true;
    }
    this.color=this.colorarr[parseInt(this.index)%3]
  }
}

