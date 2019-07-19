import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sample-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() countName: string[];
  @Input() addUserName: (string) => void;
  @Output() childEventClick = new EventEmitter<string>();
  aboutInfo: string;

  constructor() {
    this.aboutInfo = 'This is aboutInfo';
    console.log(this);
  }

  ngOnInit() {
    this.addUserName('Pradeep');
  }

  test(evt: Event): void {
    this.childEventClick.emit((<HTMLInputElement>evt.target).textContent)
  }

}
