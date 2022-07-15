import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculator'.toUpperCase();
  result = '';

  getItem(item: any) {
    this.result += item;
  }

  resultat() {
    this.result=eval(this.result)
    console.log(this.result);
    
  }
  reset() {
    this.result = '';
  }
}
