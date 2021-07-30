import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {
  @ViewChild('tmpl') template: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
