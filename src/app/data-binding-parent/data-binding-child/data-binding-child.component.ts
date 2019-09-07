import { Component, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-binding-child',
  templateUrl: './data-binding-child.component.html',
  styleUrls: ['./data-binding-child.component.css']
})
export class DataBindingChildComponent implements OnInit {

  @Input() childCounter;

  // with alias
  // @Input('childCounter') childCounter;

  //NOTE: Clicking the button emits a number, a number (integer) payload.
  @Output() countUpdated: EventEmitter<number> = new EventEmitter<number>();

  //with alias
  // @Output('countUpdated') countUpdated = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  decreaseCounter() {
    this.childCounter -= 1;
    this.countUpdated.emit(this.childCounter);
  }
}
