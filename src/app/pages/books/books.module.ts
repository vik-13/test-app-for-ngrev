import { NgModule } from '@angular/core';
import { BooksComponent } from './books.component';

@NgModule({
  declarations: [
    BooksComponent
  ],
  exports: [
    BooksComponent
  ]
})
export class BooksModule {}
