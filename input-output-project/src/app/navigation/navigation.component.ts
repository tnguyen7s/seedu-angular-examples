import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Output() currentPage = new EventEmitter<string>();
  onSelectPage(page: string):void{
    this.currentPage.emit(page);
  }
}
