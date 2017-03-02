import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {Book} from "../../models/book";
import {GetBookListService} from "../../services/get-book-list.service";
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {AppConst} from '../../constants/app-const';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public data;
    public filterQuery = "";
    public rowsOnPage = 10;

  private selectedBook : Book;
  private bookList: Book[];
  private serverPath = AppConst.serverPath;

  constructor(private getBookListService: GetBookListService, private router: Router, private http: Http) {
    this.getBookListService.getBookList().subscribe(
      res => {
        console.log(res.json());
        this.bookList=res.json();
      },
      err => {
        console.log(err);
      }
    );
  }

  onSelect(book:Book) {
    this.selectedBook = book;
    this.router.navigate(['/viewBook', this.selectedBook.id]);
  }

  ngOnInit() {
this.http.get("app/components/book-list/data.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 1000);
            });
  }

}
