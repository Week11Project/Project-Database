import { Component, Input, OnInit } from '@angular/core';
import {RestapiLoginService} from '../../services/restapi-login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string = "";
  password: string = "";

  loginForm!: FormGroup;

  message: any ="";
  failed: boolean = false;

  constructor(private service: RestapiLoginService, private router: Router, private formBuilder: FormBuilder){
    
    
    this.loginForm = new FormGroup({
      username: new FormControl(this.username, [
        Validators.required
      ]),
      password: new FormControl(this.password, [
        Validators.required
      ])
    });
  }
  
  get u(): any { return this.loginForm.get('username');}
  get p(): any { return this.loginForm.get('password');}

  ngOnInit(){

  }

  doLogin(){
    let resp = this.service.login(this.loginForm.value);
    resp.subscribe({
      next: () => this.router.navigate(["/main/projects"]),
      error: (error) =>  this.failed = true
    });

  }

}
