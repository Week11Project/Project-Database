import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiLoginService } from 'src/app/services/restapi-login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
headers!: string;
loggedin: boolean | undefined;

constructor(private service: RestapiLoginService, private router: Router){
  sessionStorage.getItem("headers");
  if(sessionStorage.getItem("headers") != null){
    this.loggedin=true;

  }
}
logout() {
  this.loggedin=false;
  sessionStorage.removeItem("headers");
  this.service.logout();
  this.router.navigate(["/login"]);
}

}
