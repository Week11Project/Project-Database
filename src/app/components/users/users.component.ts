import { Component, Input, OnInit } from '@angular/core';
import { RestapiService } from '../../services/restapi';
import { User } from '../../model/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  @Input() users?: User[];
  @Input() filteredUsers?: User[];
  searchVaule : string = "";
  filterVaule : string = "";
  userid!:any;
  

  constructor(private restapiService: RestapiService, private route: ActivatedRoute,private router: Router) {
    
    const routeid = this.route.snapshot.paramMap.get('userid');
    
    this.userid = sessionStorage.getItem("userid");

    this.restapiService.findAllUsers().subscribe((data) => {
      this.users = data;
      
      this.filteredUsers = [...this.users];

    });
  }
  
  searchUsers(value: string) {
    value=value.toLowerCase();
    if (this.users !== undefined) {
      this.filteredUsers = [...this.users.filter(user => (user.username !== undefined) && user.username.toLowerCase().includes(value))];
    }
  }
}
