import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/customers/customer';
import {CustomerService} from '../../../service/customers/customer.service';
import {MatDialog} from '@angular/material/dialog';
import {CustomerDeleteComponent} from '../customer-delete/customer-delete.component';
import {CustomerType} from '../../../model/customerTypes/customer-type';
import {CustomerTypeService} from '../../../service/customerTypes/customer-type.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  textSearch = '';
  p: number;
  customerTypes: CustomerType[] = [];
  typeSearch: any;

  constructor(private customerService: CustomerService,
              public dialog: MatDialog,
              public customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getAllCustomerType();
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });
  }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }

  search() {
    this.customerService.search(this.textSearch).subscribe(next => {
      this.customers = next;
    });
  }
  // search() {
  //   this.customerService.search(this.textSearch, this.typeSearch).subscribe(next => {
  //     this.customers = next;
  //   });
  // }

  openDialog(customerId): void {
    this.customerService.findById(customerId).subscribe(dataOfCustomer => {
      const dialogRef = this.dialog.open(CustomerDeleteComponent, {
        width: '500px',
        data: {data1: dataOfCustomer},
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }
}
