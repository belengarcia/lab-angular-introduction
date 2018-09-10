import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent {
  title: string = 'Test blogPost'
  image: string = 'https://www.w3schools.com/w3css/img_lights.jpg'
  description: string = 'Lorem ipsum dolor sit amet'
}
