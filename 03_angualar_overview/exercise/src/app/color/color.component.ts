import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color1 = '#7489ff';
  color2 = '#43d65d';
  color3 = '#d65943';
  color4 = '#d643a7';
  tempColor: string;
  constructor() { }

  ngOnInit(): void {
  }
  changeColor(value: any) {
    this.tempColor = value.value;
  }

}
