import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ho-so-ca-nhan-navbar',
  templateUrl: './ho-so-ca-nhan-navbar.component.html',
  styleUrls: ['./ho-so-ca-nhan-navbar.component.css']
})
export class HoSoCaNhanNavbarComponent {
  @Output() hoSoCaNhanPage = new EventEmitter<number>();
  pageNumber = 1;

  onChangeToPage(pageNum: number){
    this.hoSoCaNhanPage.emit(pageNum);
    this.pageNumber=pageNum;
  }
}
