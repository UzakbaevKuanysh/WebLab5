import { Component } from '@angular/core';
import { categories } from './categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = categories
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}


