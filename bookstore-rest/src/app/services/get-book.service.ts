import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {AppConst} from '../constants/app-const';


@Injectable()
export class GetBookService {

  constructor(private http: Http) { }

  getBook(id:number) {
    let url = AppConst.serverPath+"/book/"+id;
    let tokenHeader = new Headers ({
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers : tokenHeader});
  }
}
