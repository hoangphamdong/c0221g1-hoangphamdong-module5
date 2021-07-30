import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer-model/customer';
import {CustomerService} from '../../../service/customer-service/customer.service';
import {LoadCssService} from '../../../bootstrap/load-css.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService,
              private loadCss: LoadCssService) {
    loadCss.loadScript('https://code.jquery.com/jquery-3.5.1.slim.min.js');
    loadCss.loadScript('https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js');
    loadCss.loadCss('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css');
    loadCss.loadCss('https://fonts.googleapis.com/icon?family=Material+Icons');
    loadCss.loadScript('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js');
  }

  ngOnInit(): void {
  }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }

}
