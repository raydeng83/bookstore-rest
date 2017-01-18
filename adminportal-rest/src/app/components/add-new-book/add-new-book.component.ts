import { Component, OnInit } from '@angular/core';
import {UploadImageService} from "../../services/upload-image.service";
import {AddBookService} from "../../services/add-book.service";
import {Book} from "../../models/book";

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

  private newBook: Book = new Book();
  private bookAdded: boolean;

  constructor (private uploadImageService:UploadImageService, private addBookService:AddBookService) {}

  onSubmit() {
    this.addBookService.sendBook(this.newBook)
      .subscribe(
        data => {
          this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(data))._body).id);
          this.bookAdded = true;
          this.newBook = new Book();
          this.newBook.active=true;
          this.newBook.category="Management";
          this.newBook.language="english";
          this.newBook.format="paperback";
        },
        error => console.log(error)
      );
  }

  ngOnInit() {
    this.bookAdded=false;
    this.newBook.active=true;
    this.newBook.category="Management";
    this.newBook.language="english";
    this.newBook.format="paperback";
  }

}
