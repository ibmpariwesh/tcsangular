import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({//decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public userservice: UserService) {//dependency injection

  }
  users: any = [];
  user = { //model object
    name: 'Ram',
    age: 1,
    gender: ''
  }
  deleteUser(user:any){
    const observable = this.userservice.deleteUser(user);
    observable.subscribe(response =>{
      alert('delete succssfully');
    })
  }
  ngOnInit() {
    console.log('init');
    const promise = this.userservice.getAllUsers();
    promise.subscribe(response => {
      this.users = response;
    })
  }
  save() {
    console.log('clicked');
    const promise = this.userservice.saveUser(this.user);
    promise.subscribe(response => {
      console.log(response);
    },
      error => {
        alert('something went wrong, please retry');
      })
  }
}


//component = class+css+html