import { Component, OnInit } from '@angular/core';
import {Student} from '../model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  student: Student = new Student(1,  'hoàng', '2002-01-30', 7);
  studentList: Student[] = [
    {
      id: 2, name: 'nhi', dateOfBirth: '2004-02-14', point: 5
    },
    {
      id: 3, name: 'thảo', dateOfBirth: '2002-01-20', point: 7
    },
    {
      id: 4, name: 'kaha', dateOfBirth: '2002-01-20', point: 7
    },
  ];
  constructor() { }
  ngOnInit(): void {
  }

}
