import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-binding-parent',
  templateUrl: './input-binding-parent.component.html',
  styleUrls: ['./input-binding-parent.component.css']
})
export class InputBindingParentComponent implements OnInit {

  parentCounter: number = 0;
  constructor() { }

  ngOnInit() {

  }

  increaseCounter() {
    this.parentCounter += 1;
  }

  onCountUpdated(count: number) {
    this.parentCounter = count;
  }

}
