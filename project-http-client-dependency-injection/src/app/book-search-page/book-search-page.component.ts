import { Component, OnDestroy } from '@angular/core';
import { Book, BookApiService } from '../services/book-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-search-page',
  templateUrl: './book-search-page.component.html',
  styleUrls: ['./book-search-page.component.css']
})
export class BookSearchPageComponent implements OnDestroy{
  subject: string = '';
  booksBySearchedSubject: Book[] = [];
  sub1: Subscription = new Subscription();

  // dependency injection
  constructor(private bookApiService: BookApiService){

  }

  ngOnDestroy(): void {
  }

  onGetBookBySubject(){
    this.bookApiService.getBookBySubject(this.subject)
                        .subscribe(
                          (books) =>{
                            console.log(books);
                            this.booksBySearchedSubject = books;
                          },
                          (error) =>{
                            console.error(error);
                          }
                        )
  }


}
export { Book };

