import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookSearchPageComponent } from './book-search-page/book-search-page.component';
import { BookCardComponent } from './book-search-page/book-card/book-card.component';
import { MyBookCollectionPageComponent } from './my-book-collection-page/my-book-collection-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BookSearchPageComponent,
    BookCardComponent,
    MyBookCollectionPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
