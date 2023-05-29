import { Component, OnDestroy } from '@angular/core';
import { BookApiService } from '../services/book-api.service';
import { Subscription } from 'rxjs';

export interface Book{
  title: string;
  firstPublishYear: string;
  author: string;
  rating: number;
}

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
                          (resData) =>{
                            console.log(resData);
                            let works = resData['works']
                            console.log(works)

                            // extract books
                            this.booksBySearchedSubject.splice(0, this.booksBySearchedSubject.length)
                            for (let w of works){
                              let book = {
                                title: w['title'],
                                author: w['authors'][0]['name'],
                                firstPublishYear: w['first_publish_year'],
                                rating: -1
                              }
                              this.booksBySearchedSubject.push(book);
                            }
                          },
                          (error) =>{
                            console.error(error);
                          }
                        )
  }


}
