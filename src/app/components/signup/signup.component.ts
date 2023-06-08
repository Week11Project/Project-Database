import { Component, Input, OnInit } from '@angular/core';
import {RestapiLoginService} from '../../services/restapi-login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = "";
  password: string = "";

  /** The ! means that the signupForm variable is not null*/
  signupForm!: FormGroup;

  message: any ="";
  failed: boolean = false;

  constructor(private service: RestapiLoginService, private router: Router, private formBuilder: FormBuilder){
    this.signupForm = new FormGroup({
        username: new FormControl(this.username, [Validators.required]),
        password: new FormControl(this.password, [Validators.required])
      });
  }

  get u(): any { return this.signupForm.get('username');}
  get p(): any { return this.signupForm.get('password');}


  ngOnInit(){

  }

  addUser(){
    console.log("HIT");

    // let resp = this.service.login(this.loginForm.value);
    // resp.subscribe({
    //   next: () => this.router.navigate(["/main/projects"]),
    //   error: (error) =>  this.failed = true
    // });

  }

}
