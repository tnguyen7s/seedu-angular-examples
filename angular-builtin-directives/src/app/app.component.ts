import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  n: number = 0;
  numbers:number[] = [2,3,7,1,5,8];

  colorTheNumber(){
    if (this.n%2==0){
      return 'blue';
    }
    else{
      return 'green'
    }
  }
}
