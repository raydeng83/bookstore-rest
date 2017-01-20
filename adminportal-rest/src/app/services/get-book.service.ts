import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";

@Injectable()
export class GetBookService {

  constructor(private http: Http) { }

  getBook(id:number) {
    let url = "http://localhost:8181/book/"+id;
    let tokenHeader = new Headers ({
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers : tokenHeader});
  }
}
