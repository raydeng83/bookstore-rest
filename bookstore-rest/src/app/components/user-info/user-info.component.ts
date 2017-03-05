import { Component, OnInit } from '@angular/core';
import {AppConst} from '../../constants/app-const';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  private serverPath = AppConst.serverPath;

  constructor() { }

  ngOnInit() {
  }

}
