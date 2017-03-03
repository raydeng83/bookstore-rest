import { Component, OnInit } from '@angular/core';
import {AppConst} from '../../constants/app-const';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  private serverPath = AppConst.serverPath;
  private loginError:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
