import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../model/student';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent implements OnInit {
  student: Student = new Student(0, 'lĩnh', '2002-02-15', 5);
  @Output() submitCreateStudent = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  createStudent() {
    this.submitCreateStudent.emit(this.student);
  }

}
