import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../../model/customerTypes/customer-type';
import {CustomerService} from '../../../service/customers/customer.service';
import {CustomerTypeService} from '../../../service/customerTypes/customer-type.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  id: number;
  customerTypes: CustomerType[] = [];
  // tslint:disable-next-line:variable-name
  validate_message = {
    customerCode: [
      {type: 'required', message: '*Customer code not null'},
      {type: 'pattern', message: 'ex: KH-1234'}
    ],
    customerName: [
      {type: 'required', message: '**Please input name Customer..!'},
    ], customerType: [
      {type: 'required', message: '**Please input name Customer..!'},
    ],
    customerDayOfBirth: [
      {type: 'required', message: '*Date Of Birth not null'},
      {type: 'pattern', message: 'Date Format Exception (dd/mm/YYYY)!!!'}
    ],
    customerIdCard: [
      {type: 'required', message: '***Please input Id card'},
      {type: 'pattern', message: 'Id card Format Exception (XXXXXXXXX) or (XXXXXXXXXXXX)!!!'}
    ],
    customerPhone: [
      {type: 'required', message: '***Please input Phone'},
      {type: 'pattern', message: 'Number Phone Format Exception (090|091)XXXXXXX !!!'}
    ],
    customerEmail: [
      {type: 'required', message: '***Please input Email'},
      {type: 'pattern', message: 'Email Format Exception abc@gmail.com !!!'}
    ],
    customerAddress: [
      {type: 'required', message: '***Please input Address'},
    ],

  };

  constructor(
    private customerService: CustomerService,
    private customerTypeService: CustomerTypeService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      this.customerForm = new FormGroup({
        customerName: new FormControl(customer.customerName, [Validators.required]),
        customerCode: new FormControl(customer.customerCode, [Validators.required, Validators.pattern('^(KH-)\\d{4}$')]),
        customerType: new FormControl(customer.customerType),
        // tslint:disable-next-line:max-line-length
        customerDayOfBirth: new FormControl(customer.customerDayOfBirth),
        customerIdCard: new FormControl(customer.customerIdCard, [Validators.required, Validators.pattern('^\\d{9}|\\d{12}$')]),
        // tslint:disable-next-line:max-line-length
        customerPhone: new FormControl(customer.customerPhone, [Validators.required, Validators.pattern('(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}')]),
        // tslint:disable-next-line:max-line-length
        customerEmail: new FormControl(customer.customerEmail, [Validators.required, Validators.pattern('^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$')]),
        customerAddress: new FormControl(customer.customerAddress, [Validators.required])
      });
    });
  }

  updateCustomer(id: number) {
    const customer = this.customerForm.value;
    customer.customerType = {
      id: customer.customerType
    };
    this.customerService.updateCustomer(id, customer).subscribe(() => {
      alert('Cập nhật thành công');
    });
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });
  }

}
