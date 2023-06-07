import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RestapiLoginService {
  
  headers:any;
  user?:User;

  constructor(private http: HttpClient) { }

  public login(auth: any){
    const authenticationURL:string="http://localhost:9080/authentication";
    const username = auth.username;
    const password = auth.password;
    const headers=  new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    
    this.headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    
    sessionStorage.setItem("headers", btoa(username+":"+password));
    return this.http.get(authenticationURL, {headers, responseType: 'text' as 'json'});
  }

  public logout(){
    const url:string="http://localhost:9080/logout";
    
    sessionStorage.removeItem("userid")
    sessionStorage.removeItem("headers");

    return this.http.get(url);
  }

  public async userid(username:string):Promise<string>{
    var uid! :string;
    const usernameURL:string="http://localhost:9080/users/";
    const u:any = await this.http.get<User>(usernameURL+username, { headers: this.headers}).toPromise();
    uid = u.user_id.toString();
    console.log(uid);
    return uid;

  }
  


    // public getUsers(){
    //   let username = "";
    //   let password = "";
    //   const headers=  new HttpHeaders({Authoriation: 'basic'+btoa(username+":"+password)})
    //   this.http.get("http://localhost:9080/users", {headers});
    // }
}
