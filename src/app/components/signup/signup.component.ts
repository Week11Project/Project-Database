import { Component, Input, OnInit } from '@angular/core';
import {RestapiLoginService} from '../../services/restapi-login.service';
import {RestapiService} from '../../services/restapi';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {User} from '../../model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: string = "";
  password: string = "";

  /** The ! means that the signupForm variable is not null*/
  signupForm!: FormGroup;

  message: any ="";
  failed: boolean = false;

  constructor(private service: RestapiService, private router: Router, private formBuilder: FormBuilder){
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
    let resp = this.service.getUser(this.signupForm.controls['username'].value);
    resp.subscribe(x =>{
      if(x.username=== this.signupForm.controls['username'].value){
        console.log("Already Exists");
      }else{
        if(this.signupForm.controls['password'].value != ""){
          //In order for the service to work and actually save the values, I've got to have an subscribe
          let rep = this.service.addUser(this.signupForm.value);
          rep.subscribe(y=>{
            //This console.log(y) call is not necessary
            console.log(y)
          })

          this.router.navigate(["login"]);

        }else{
          console.log("Password required")
        }
      }
    }

    )
  }



    //this.service.getUser(this.signupForm.controls['username'].value)
  //  console.log(this.signupForm.controls['username'].value);

    // if(this.service.getUser(this.signupForm.controls['username'].value) == null){
    //   console.log("null");
    // }

    //Check to see if the username does not exist
    // let resp = this.service.login(this.loginForm.value);
    // resp.subscribe({
    //   next: () => this.router.navigate(["/main/projects"]),
    //   error: (error) =>  this.failed = true
    // });

}
