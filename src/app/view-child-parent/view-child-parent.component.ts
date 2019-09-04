import { ViewChildChildComponent } from './view-child-child/view-child-child.component';
import { Component, OnInit, ViewChild, AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-view-child-parent',
  templateUrl: './view-child-parent.component.html',
  styleUrls: ['./view-child-parent.component.css']
})
export class ViewChildParentComponent implements OnInit {

  @ViewChild(ViewChildChildComponent)
  private childComponent: ViewChildChildComponent;

  constructor() { }

  ngOnInit() { }

  counter() {
    return this.childComponent.childCounter;
  }

  increaseCounter() {
    this.childComponent.increaseCounter();
  }

  resetCounter() {
    this.childComponent.resetCounter();
  }

}
