import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  private ClickCounter: number;

  constructor() { }

  ngOnInit(): void {
  }
  countChangedHandler(count: number) {
    this.ClickCounter = count;
    console.log(count);
  }

}
