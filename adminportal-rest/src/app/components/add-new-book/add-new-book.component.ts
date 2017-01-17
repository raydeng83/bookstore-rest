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
          this.bookAdded = true;
          this.newBook = new Book();
        },
        error => console.log(error)
      );
  }

  ngOnInit() {
  }

}
