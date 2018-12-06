import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements  OnInit {
  inc = 0
  setTrigger = 0
  ngOnInit() {
  }
  addButton() {
    this.inc = 1000;
    this.setTrigger++;
  }
}
