import {Component} from '@angular/core';
import {MyserviceService} from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 7 Project!';
  todayDate: Date;

  constructor(private myservice: MyserviceService) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.todayDate = this.myservice.showTodayDate();
  }
}
