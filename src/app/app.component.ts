import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public userservice: UserService) {

  }
  user = { //model
    name: 'Ram',
    age:1, 
    gender:''
  }

  save() {
    console.log('clicked');
    const promise = this.userservice.saveUser(this.user);
    promise.subscribe(response => {
      console.log(response);
    })
  }
}


//component = class+css+html