import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  isUserLoggedIn:boolean = false;
  returnUrl: string;

  validateUser(username: string, pass:string):boolean{
    if (username === 'admin' && pass === 'admin') {
      this.isUserLoggedIn = true;
      return true;
    }
    return false;
  }
}
