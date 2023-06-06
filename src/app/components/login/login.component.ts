import { Component, OnInit } from '@angular/core';
import {RestapiLoginService} from '../../services/restapi-login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username: string = "";
  password: string ="";

  message: any ="";

  constructor(private service: RestapiLoginService, private router: Router){
  }

  ngOnInit(){

  }

  doLogin(){
    let resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      this.message = data;
      if(this.message){
        this.router.navigate(["/main/projects"]);
      }
    });

  }

}
