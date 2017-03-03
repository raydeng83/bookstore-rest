import { Component, OnInit } from '@angular/core';
import {AppConst} from '../../constants/app-const';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  private serverPath = AppConst.serverPath;
  private emailSent:boolean = false;
  private usernameExists:boolean = false;
  private emailExists:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
