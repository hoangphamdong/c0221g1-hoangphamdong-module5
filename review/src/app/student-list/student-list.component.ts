import {Component, OnInit} from '@angular/core';
import {Student} from '../model/student';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  config: any;
  collection = {count: 60, data: []};

  constructor() {
    for (let i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          value: 'items number ' + (i + 1)
        }
      );
    }

    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  student: Student[] = [
    {
      id: 1, name: 'hoang Pham dong', dateOfBirth: '2002-01-20', point: 10
    },
    {
      id: 2, name: 'Thảo Nhi', dateOfBirth: '2002-01-20', point: 7
    },
    {
      id: 3, name: 'Kiều Nhi', dateOfBirth: '2002-01-20', point: 6
    },
    {
      id: 3, name: 'Kiều Nhi', dateOfBirth: '2002-01-20', point: 4
    }
  ];
  student2: Student = {
    id: 1,
    name: 'hoàng phạm đông',
    dateOfBirth: '2002-02-01',
    point: 1
  };
  student1: Student = new Student(3, 'hải', '2002-12-12', 4);

  ngOnInit(): void {
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  createStudent(value: any) {
    this.student.push(value);
  }

  detailStudent(student: Student) {
    this.student1 = student;
  }
}
