import { Component, OnInit } from '@angular/core';
import {UploadImageService} from "../../services/upload-image.service";

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

  constructor (private uploadImageService:UploadImageService) {}

  // onSubmit() {
  //   this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
  //     user => {
  //       this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
  //       console.log(this.user);
  //       this.newPhoto.user = this.user;
  //       this.addPhotoService.sendPhoto(this.newPhoto)
  //         .subscribe(
  //           data => {
  //             this.photoAdded = true;
  //             this.newPhoto = new Photo();
  //           },
  //           error => console.log(error)
  //         );
  //     },
  //     error => console.log(error)
  //   )
  // }

  ngOnInit() {
  }

}
