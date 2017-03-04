import { Component, OnInit } from '@angular/core';
import {AppConst} from '../../constants/app-const';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  private serverPath = AppConst.serverPath;
  private emailSent:boolean = false;
  private usernameExists:boolean = false;
  private emailExists:boolean = false;
  private username:string;
  private email:string;

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.usernameExists=false;
    this.emailExists=false;
    this.emailSent = false;
    
    this.userService.newUser(this.username, this.email).subscribe(
      res => {
        console.log(res);
        this.emailSent = true;
      },
      error => {
        console.log(error.text());
        let errorMessage=error.text();
        if (errorMessage==="usernameExists") this.usernameExists=true;
        if (errorMessage==="emailExists") this.emailExists=true;
      }
    );
  }

}
