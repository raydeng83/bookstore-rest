/**
 * Created by z00382545 on 1/16/17.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookListComponent} from './components/book-list/book-list.component';
import {BookDetailComponent} from './components/book-detail/book-detail.component';
import {HomeComponent} from './components/home/home.component';
import {NewAccountComponent} from './components/new-account/new-account.component';
import {LogInComponent} from './components/log-in/log-in.component';
import {ForgetPasswordComponent} from './components/forget-password/forget-password.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bookList',
    component: BookListComponent
  },
  {
    path: 'bookDetail/:id',
    component: BookDetailComponent
  },
  {
    path: 'newAccount',
    component: NewAccountComponent
  },
  {
    path: 'logIn',
    component: LogInComponent
  },
  {
    path: 'forgetPassword',
    component: ForgetPasswordComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
