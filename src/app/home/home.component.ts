import { Component, OnInit } from '@angular/core';

@Component({
  'selector': 'sample-home',
  'templateUrl': './home.component.html',
  'styleUrls': ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name: string;
  count: string[];

  constructor() {
    console.log(this);
    this.name = 'Paul';
    this.count = [this.name];

    this.addUserName = this.addUserName.bind(this);
  }

  ngOnInit() {

  }

  addUserName(val: string): void {
    if (this.count.indexOf(val) < 0
      && val.length !== 0) {
      this.count.push(val);
    }
  }

  printChild(val: string): void {
    console.log('from about: ', val);
  }

  onChangeType(evt: Event): void {
    console.log((<HTMLInputElement>evt.target).value);
  }
}
