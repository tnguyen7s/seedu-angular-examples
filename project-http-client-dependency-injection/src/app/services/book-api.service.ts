import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs";


export interface Book{
  title: string;
  firstPublishYear: string;
  author: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class BookApiService
{
  constructor(private http: HttpClient){

  }

  // use HttpClient to get data from the API
  getBookBySubject(subject: string){
    return this.http.get<any>(`https://openlibrary.org/subjects/${subject}.json`)
                .pipe(
                  map(
                    (resData) => {
                      let works = resData['works']

                      // extract books
                      let booksBySearchedSubject = [];
                      for (let w of works){
                        let book = {
                          title: w['title'],
                          author: w['authors'][0]['name'],
                          firstPublishYear: w['first_publish_year'],
                          rating: -1
                        }
                        booksBySearchedSubject.push(book);
                      }

                      return booksBySearchedSubject;
                    }
                  )
                )
  }
}
