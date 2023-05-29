import { Component, Input } from '@angular/core';
import { Book } from '../book-search-page.component';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() book: Book = {
    title: '',
    firstPublishYear: '',
    author: '',
    rating: 0
  }
}
