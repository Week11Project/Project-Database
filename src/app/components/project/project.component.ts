import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { RestapiService } from 'src/app/services/restapi';

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
  @Input() admin! : boolean;

  isGithubHidden : boolean = true;  
  isSiteHidden : boolean = true; 
  isCardHidden : string = ""; 

  constructor(private restapiService: RestapiService, private snackBar: MatSnackBar,private router: Router) {}

  ngOnInit() {
    
    // console.log(this.project)
    if (this.project.github!=null) {
      this.isGithubHidden = false;
    }
    if (this.project.site!=null) {
      this.isSiteHidden = false;
    }
    this.color=this.colorarr[parseInt(this.index)%3];
  }

  deleteProject(){
    if(this.project.id !== undefined){
      this.restapiService.delete(this.project.id).subscribe({
        next: (response) => this.openSnackBar(this.project.title+" deleted successfully"),
        error: (error) => this.openSnackBar(this.project.title+" deleted failed"),
      });
    }
    
    this.isCardHidden = "deleted";
  }
  updateProject(){
    if(this.project.id !== undefined){
      
      // this.restapiService.find(this.project.id).subscribe({
      //   next: (response) => console.log(response),
      //   error: (error) => console.log(error),
      // });

      this.router.navigate(["/main/edit/"+this.project.id]);
    }
    //   this.restapiService.update(this.project.id).subscribe({
    //     next: (response) => this.openSnackBar(this.project.title+" deleted successfully"),
    //     error: (error) => this.openSnackBar(this.project.title+" deleted failed"),
    //   });
    // }
    
    // this.isCardHidden = "deleted";
  }
  
  openSnackBar(message: string) {
    this.snackBar.open(message, "OK", {
      duration: 2000,
    });
  }
}

