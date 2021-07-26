import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-component',
  templateUrl: './app-component.component.html',
  styleUrls: ['./app-component.component.scss']
})
export class AppComponentComponent implements OnInit {
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
