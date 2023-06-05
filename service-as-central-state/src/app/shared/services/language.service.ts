import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LanguageService{
  languageState = new BehaviorSubject<string>('vi');

  switchLanguage(){
    let curLanguage = this.languageState.getValue();
    curLanguage = (curLanguage=='vi')? 'en':'vi';

    //update the value for language state
    // let other components know about the update
    this.languageState.next(curLanguage);
  }
}
