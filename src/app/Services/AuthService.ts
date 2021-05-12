import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
// import { User } from './user';



@Injectable({
    providedIn: 'root'
  })
export class AuthService {

    // User related properties
    private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
    public isAuth:Boolean = false;

  constructor(
    private router: Router
  ) {}

    checkLoginStatus() : boolean {
        return false;
    }


    get isLoggesIn() 
    {
        return this.loginStatus.asObservable();
    }

    
}