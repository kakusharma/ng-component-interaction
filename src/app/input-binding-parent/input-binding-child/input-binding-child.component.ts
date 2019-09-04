import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-binding-child',
  templateUrl: './input-binding-child.component.html',
  styleUrls: ['./input-binding-child.component.css']
})
export class InputBindingChildComponent implements OnInit, OnChanges {

  private _count: number;
  isCountEven: boolean;

  @Input() childCounter;

  // with alias
  // @Input('childCounter') childCounter;

  //NOTE: Clicking the button emits a number, a number (integer) payload.
  @Output('countUpdate') changeCount = new EventEmitter<number>();

  // @Input('counter')
  // set currentCount(count: number) {
  //   this.isCountEven = (count % 2 === 0);
  //   this._count = count;
  // }

  // get currentCount(): number {
  //   return this._count;
  // }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes["currentCount"]) {
      var count = changes["currentCount"].currentValue;
      this.isCountEven = (count % 2 === 0);
    }
  }

  decreaseCounter() {
    this.childCounter -= 1;
    this.changeCount.emit(this.childCounter);
  }

}
