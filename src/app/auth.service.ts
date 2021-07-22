import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get('http://localhost:3000/api/patients')
  }

  userDetails() {
    const user = localStorage.getItem("user");
    // console.log(user);
    return user;
  }

  isAdmin() {
    const login = JSON.parse(this.userDetails());
    console.log(login.role);
    if(login && login.role === "admin") {
      return true;
    } else {
      return false;
    }
    
  }

}
