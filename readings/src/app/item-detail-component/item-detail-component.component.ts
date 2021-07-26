import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-detail-component',
  templateUrl: './item-detail-component.component.html',
  styleUrls: ['./item-detail-component.component.scss']
})
export class ItemDetailComponentComponent implements OnInit {
@Input()item: string;
  constructor() { }

  ngOnInit(): void {
  }

}
