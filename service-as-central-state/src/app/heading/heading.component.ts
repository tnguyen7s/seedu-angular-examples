import { Component } from '@angular/core';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent {
  // dependency injection
  constructor(private languageService: LanguageService){
  }

  onSwitchLanguage(){
    this.languageService.switchLanguage();
  }
}
