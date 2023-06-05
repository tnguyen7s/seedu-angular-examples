import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, OnDestroy{
  curLanguage: string = ''
  sub: any;
  constructor(private languageService: LanguageService){
  }

  // lifecycle hook
  ngOnInit(): void {
    // initial state when the component is constructed
    this.curLanguage = this.languageService.languageState.getValue();


    // update the value when the languageState is changed
    // event-driven design
    this.sub = this.languageService.languageState.subscribe(
      (value)=>{
        this.curLanguage = value;
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe(); // to avoid memory leak
  }
}
