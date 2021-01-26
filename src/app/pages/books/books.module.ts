import { NgModule } from '@angular/core';
import { BooksComponent } from './books.component';
import { ButtonModule } from '../../components/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule
  ],
  exports: [
    BooksComponent
  ]
})
export class BooksModule {}
