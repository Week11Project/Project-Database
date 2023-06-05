import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiLoginService {

  constructor(private http: HttpClient) { }

  public login(username: string, password: string){
    const headers=  new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)})
    return this.http.get("http://localhost:9080/authentication", {headers, responseType: 'text' as 'json'});
  }


    // public getUsers(){
    //   let username = "";
    //   let password = "";
    //   const headers=  new HttpHeaders({Authoriation: 'basic'+btoa(username+":"+password)})
    //   this.http.get("http://localhost:9080/users", {headers});
    // }
}
