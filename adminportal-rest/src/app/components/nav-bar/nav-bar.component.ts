import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.loginService.logout().subscribe(
      res => {
        localStorage.setItem('PortalAdminHasLoggedIn', '');
      },
      err => console.log(err)
    );
    // location.reload();
    this.router.navigate(['/']);
  }

}
