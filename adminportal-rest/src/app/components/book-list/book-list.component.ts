import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Book} from "../../models/book";
import {GetBookListService} from "../../services/get-book-list.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  private bookList: Book[];

  constructor(private getBookListService: GetBookListService) {
    this.getBookListService.getBookList().subscribe(
      res => {
        console.log(res.json());
        this.bookList=res.json();
      },
      err => {

      }
    );
  }

  ngOnInit() {

  }

}
