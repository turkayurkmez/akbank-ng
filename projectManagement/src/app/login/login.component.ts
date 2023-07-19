import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService){

  }

  login(userName:string, password:string){
    let loggedIn = this.userService.validateUser(userName,password);
    if (this.userService.isUserLoggedIn) {
       console.log('return Url varsa gidecek...');
    }  
  }
}
