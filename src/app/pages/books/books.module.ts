import { NgModule } from '@angular/core';
import { BooksComponent } from './books.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    BooksComponent
  ]
})
export class BooksModule {}
