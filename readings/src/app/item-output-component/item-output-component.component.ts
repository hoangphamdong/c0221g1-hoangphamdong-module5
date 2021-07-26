import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item-output-component',
  templateUrl: './item-output-component.component.html',
  styleUrls: ['./item-output-component.component.scss']
})
export class ItemOutputComponentComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
