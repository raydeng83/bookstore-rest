import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {CookieService} from "angular2-cookie/services/cookies.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private credential = {'username':'', 'password':''};
  private loggedIn = false;

  constructor (private loginService: LoginService, private cookieService: CookieService){
  }

  onSubmit() {
    this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(
      res => {
        this.loggedIn = true;
        console.log(res);
        console.log("cookies: "+this.cookieService.get("JSESSIONID"));
      },
      error => {
        this.loggedIn = false;
        console.log(error);
      }
    );

  }

  ngOnInit() {
  }

}
