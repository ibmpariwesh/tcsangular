import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //dependency injection
  constructor(public http:HttpClient) { }

  saveUser(user:any){
    return this.http.post("http://localhost:3000/users", user);
    //returns promise
  }

  getAllUsers(){
    return this.http.get("http://localhost:3000/users");
  }
}
