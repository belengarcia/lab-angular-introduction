import { Component } from '@angular/core';
import {MainComponentComponent} from './main-component/main-component.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iteration2';
  blogPost = new MainComponentComponent()
}
