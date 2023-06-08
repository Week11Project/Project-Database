import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { User } from 'src/app/model/user';
import { RestapiService } from 'src/app/services/restapi';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user?: User;
  @Input() index : string = "";
  projects!: Project[];
  uid!:number;
  colorarr : Array<string> = ["primary", "secondary", "info", "danger", "success", "warning"];
  color: string = "primary";

  constructor(private restapiService: RestapiService,private router: Router) {
  }

  ngOnInit() {
    this.color=this.colorarr[parseInt(this.index)%3];
    
    if(this.user!==undefined){
      this.uid=this.user.user_id;
      this.restapiService.findAll(this.uid.toString()).subscribe((data) => {          
          this.projects = data;
      });
    }
  }

}

