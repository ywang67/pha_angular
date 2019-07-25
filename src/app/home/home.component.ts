import { Component, OnInit } from '@angular/core';

@Component({
  'selector': 'sample-home',
  'templateUrl': './home.component.html',
  'styleUrls': ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  username: string;

  constructor() {
    this.username = 'Paul';
  }

  ngOnInit() {

  }
}
