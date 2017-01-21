/**
 * Created by z00382545 on 1/16/17.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {AddNewBookComponent} from "./components/add-new-book/add-new-book.component";
import {BookListComponent} from "./components/book-list/book-list.component";
import {ViewBookComponent} from "./components/view-book/view-book.component";
import {EditBookComponent} from "./components/edit-book/edit-book.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'addNewBook',
    component: AddNewBookComponent
  },
  {
    path: 'editBook/:id',
    component: EditBookComponent
  },
  {
    path: 'bookList',
    component: BookListComponent
  },
  {
    path: 'viewBook/:id',
    component: ViewBookComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
