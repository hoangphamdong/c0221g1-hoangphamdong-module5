import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import {CustomerService} from '../../../service/customers/customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  public customerOfFullName;
  public id;

  constructor(private customerService: CustomerService,
              public dialogRef: MatDialogRef<CustomerDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.customerOfFullName = this.data.data1.customerName;
    this.id = this.data.data1.id;
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.id).subscribe(data => {
      this.dialogRef.close();
    }, e => console.log(e));
  }
}
