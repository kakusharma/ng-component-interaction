import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child-child',
  templateUrl: './view-child-child.component.html',
  styleUrls: ['./view-child-child.component.css']
})
export class ViewChildChildComponent implements OnInit {

  currentCount: number = 0;

  constructor() { }

  ngOnInit() {
  }

  increaseCounter() {
    this.currentCount += 1;
  }

  resetCounter() {
    this.currentCount = 0;
  }

}
