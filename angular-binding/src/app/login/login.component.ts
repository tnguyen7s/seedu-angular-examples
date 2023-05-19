import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = "default username";
  pwd = "default pwd";

  onLogin(){
    console.log('onLogin is called: ');
    console.log(this.username, this.pwd)
  }
}
