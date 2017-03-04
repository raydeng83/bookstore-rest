import { Injectable } from '@angular/core';
import {AppConst} from '../constants/app-const';
import {Http, Headers} from '@angular/http';

@Injectable()
export class UserService {
  private serverPath:string = AppConst.serverPath;
  
  constructor(private http:Http) { }

  newUser(username:string, email:string) {
    let url = this.serverPath+"/user/newUser";
    let userInfo = {
    	"username" : username,
    	"email" : email
    };
    let tokenHeader = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.post(url, JSON.stringify(userInfo), {headers : tokenHeader});
  }
}
