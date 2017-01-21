import { Injectable } from '@angular/core';
import {Book} from "../models/book";
import {Http, Headers} from "@angular/http";

@Injectable()
export class EditBookService {

  constructor (private http: Http) {}

  sendBook(book:Book) {
    let url = "http://localhost:8181/book/update";
    let headers1 = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.post(url, JSON.stringify(book), {headers: headers1});
  }
}
