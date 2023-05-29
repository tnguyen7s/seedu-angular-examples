import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookApiService
{
  constructor(private http: HttpClient){

  }

  // use HttpClient to get data from the API
  getBookBySubject(subject: string){
    return this.http.get<any>(`https://openlibrary.org/subjects/${subject}.json`);
  }
}
