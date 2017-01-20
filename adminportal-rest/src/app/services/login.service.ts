import {Injectable} from "@angular/core";
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor (private http: Http) {}

  sendCredential(username: string, password: string) {
    let url = "http://localhost:8181/token";
    let encodedCredentials = btoa(username+":"+password);
    let basicHeader = "Basic "+ encodedCredentials;
    let headers = new Headers(
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization' : basicHeader

        // 'Access-Control-Allow-Credentials' : true
      });
    return this.http.get(url, {headers: headers});
  }

  checkSession() {
    let url = "http://localhost:8181/checkSession";
    let tokenHeader = new Headers ({
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers : tokenHeader});
  }

  logout() {
    let url = "http://localhost:8181/user/logout";
    let tokenHeader = new Headers ({
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.post(url,'', {headers : tokenHeader});
  }

}
