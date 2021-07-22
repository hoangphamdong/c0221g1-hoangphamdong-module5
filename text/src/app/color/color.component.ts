import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  color: string[] = ['#7489ff', '#43d65d', '#d65943', '#d643a7'];
  tempColor: string;
  constructor() { }

  ngOnInit(): void {
  }
  changeColor(value: any) {
    this.tempColor = value;
  }

}
