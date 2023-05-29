import { Component, Input } from '@angular/core';

export interface Book{
  title: string;
  genre: string;
  author: string;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book;
}
