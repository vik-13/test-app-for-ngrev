import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent {
  constructor(private _books: BooksService) {}

  submit(form: NgForm): void {
    console.log(form);
  }
}
