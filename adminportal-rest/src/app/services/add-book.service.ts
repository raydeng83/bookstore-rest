import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {Book} from "../models/book";

@Injectable()
export class AddBookService {

  constructor (private http: Http) {}

  sendBook(book:Book) {
    let url = "http://localhost:8181/book/add";
    let headers1 = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.post(url, JSON.stringify(book), {headers: headers1});
  }

}
