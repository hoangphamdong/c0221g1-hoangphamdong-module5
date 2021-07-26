import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss']
})
export class StudentInfoComponent implements OnInit {
  student = {id: 5, name: 'hải'};

  constructor() {
  }

  ngOnInit(): void {
  }

  changeNameStudent(event: any) {
    this.student.name = event.value;
  }

}
