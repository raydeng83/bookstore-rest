import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class GetBookListService {

  constructor (private http: Http) {}

  getBookList() {
    let url = "http://localhost:8181/book/bookList";
    let tokenHeader = new Headers ({
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers : tokenHeader});
  }
}
