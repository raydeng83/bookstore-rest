import { Component, OnInit } from '@angular/core';
import {AppConst} from '../../constants/app-const';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  private serverPath = AppConst.serverPath;
  private emailNotExist: boolean = false;
  private forgetPasswordEmailSent:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
