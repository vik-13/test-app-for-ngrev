import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DashboardService } from '../../components/dashboard/dashboard.service';

export interface Book {
  title: string;
  author: string;
  bestSeller: boolean;
  pages?: number;
}

@Injectable()
export class BooksService {
  constructor(private _http: HttpClient, private _dashboard: DashboardService) {}

  get(): Observable<Book[]> {
    return this._http.get('').pipe(
      catchError(() => {
        return of('');
      }),
      map(() => {
        return [
          {
            title: 'The Old Man and the Sea',
            author: 'Ernest Miller Hemingway',
            bestSeller: true
          }
        ];
      })
    );
  }
}
