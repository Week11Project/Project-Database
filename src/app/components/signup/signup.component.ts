import { Component, Input, OnInit } from '@angular/core';
import {RestapiLoginService} from '../../services/restapi-login.service';
import {RestapiService} from '../../services/restapi';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {User} from '../../model/user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: string = "";
  password: string = "";
  confirmPassword: string = "";

  /** The ! means that the signupForm variable is not null*/
  signupForm!: FormGroup;

  message: any ="";
  failed: boolean = false;
  
  passwordMatch: boolean = true;

  constructor(private service: RestapiService, private router: Router, private formBuilder: FormBuilder,public snackBar: MatSnackBar){
    this.signupForm = new FormGroup({
        username: new FormControl(this.username, [Validators.required]),
        password: new FormControl(this.password, [Validators.required]),
        confirmPassword: new FormControl(this.confirmPassword, [Validators.required])
      });
  }


  get u(): any { return this.signupForm.get('username');}
  get p(): any { return this.signupForm.get('password');}
  get cp(): any { return this.signupForm.get('confirmPassword');}


  ngOnInit(){

  }
  checkUsername(){
    console.log(this.signupForm.controls['username'].value);
    
    let resp = this.service.getUser(this.signupForm.controls['username'].value);
    resp.subscribe(x =>{
      if(x.username=== this.signupForm.controls['username'].value){
        this.failed=true;
        console.log("Already Exists");
      }else{
        this.failed=false;
      }
    });
  }
  
  checkPassword(){
    this.passwordMatch = this.signupForm.value.password===this.signupForm.value.confirmPassword;
  }

  addUser(){
    let resp = this.service.getUser(this.signupForm.controls['username'].value);
    resp.subscribe(x =>{
      if(x.username=== this.signupForm.controls['username'].value){
        console.log("Already Exists");
      }else{
        this.failed=false;
        if(this.signupForm.controls['password'].value != ""){
          //In order for the service to work and actually save the values, I've got to have an subscribe
          let rep = this.service.addUser(this.signupForm.value);
          // rep.subscribe(y=>{
          //   //This console.log(y) call is not necessary
          //   console.log(y);
          // });
          rep.subscribe({
            next: (response) => {
              console.log(response);
              this.openSnackBar("User added successfully");
          },
            error: (error) => this.openSnackBar("User added failed"),
          });

          this.router.navigate(["login"]);

        }else{
          console.log("Password required");
        }
      }
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "OK", {
      duration: 2000,
    });
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
