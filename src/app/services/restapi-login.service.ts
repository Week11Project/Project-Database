import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiLoginService {

  constructor(private http: HttpClient) { }

  public login(auth: any){
    const authenticationURL:string="http://localhost:9080/authentication";
    const username = auth.username;
    const password = auth.password;
    
    const headers=  new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    sessionStorage.setItem("headers", btoa(username+":"+password));
    return this.http.get(authenticationURL, {headers, responseType: 'text' as 'json'});
  }
  

  public logout(){
    const url:string="http://localhost:9080/logout";
    return this.http.get(url);
  }


    // public getUsers(){
    //   let username = "";
    //   let password = "";
    //   const headers=  new HttpHeaders({Authoriation: 'basic'+btoa(username+":"+password)})
    //   this.http.get("http://localhost:9080/users", {headers});
    // }
}
