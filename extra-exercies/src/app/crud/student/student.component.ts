import { Component, OnInit } from '@angular/core';
import {Student} from '../model/student';
import {LoadCssService} from '../../bootstrap/load-css.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  student: Student = new Student(1,  'hoàng', '2002-01-30', 7);
  page = 1;
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
  constructor(private loadCss: LoadCssService) {
    loadCss.loadScript('https://code.jquery.com/jquery-3.5.1.slim.min.js');
    loadCss.loadScript('https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js');
    loadCss.loadCss('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css');
    loadCss.loadScript('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js');
  }
  ngOnInit(): void {
  }

}
