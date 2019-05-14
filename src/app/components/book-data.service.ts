import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookListItem } from './models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<BookListItem[]> {
    return this.http.get<BooksGetResponse>('http://someserver/books')
      .pipe(
        map(r => r.data)
      );

    // return of([
    //   { id: '1', title: 'Walden' },
    //   { id: '2', title: 'Nature' }
    // ]);
  }
}

interface BooksGetResponse {
  data: BookListItem[];
}
