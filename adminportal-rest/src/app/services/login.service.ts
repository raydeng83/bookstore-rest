import {Injectable} from "@angular/core";
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {
  token: string;

  constructor (private http: Http) {}

  sendCredential(credentials) {
    let tokenUrl1 = "http://localhost:8181/login";
    let headers1 = new Headers({'Content-Type': 'application/json'});
    return this.http.post(tokenUrl1, JSON.stringify(credentials), {headers: headers1});
  }

  logout() {
    localStorage.setItem("token","");
    localStorage.setItem("currentUserName", '');
    alert("You just logged out.");
  }

}
