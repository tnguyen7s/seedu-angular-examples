import { Component } from '@angular/core';
import { Book } from './book/book.component';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent {
  books: Book[] = [
    {
      author: 'J. R. R. Tolkien',
      title: 'The Lord of the Rings',
      genre: 'Fantasy',
    },
    {
      title: 'Harry Potter',
      genre: 'Fantasy',
      author: 'J. K. Rowling'
    }
  ];
}
