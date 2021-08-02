import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../../model/customerTypes/customer-type';
import {CustomerService} from '../../../service/customers/customer.service';
import {CustomerTypeService} from '../../../service/customerTypes/customer-type.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
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
  customerForm: FormGroup = new FormGroup({
    customerName: new FormControl('', [Validators.required]),
    customerCode: new FormControl('', [Validators.required, Validators.pattern('^(KH-)\\d{4}$')]),
    customerType: new FormControl(),
    customerDayOfBirth: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}(\\/|-)\\d{2}(\\/|-)\\d{2}$')]),
    customerIdCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}|\\d{12}$')]),
    customerPhone: new FormControl('', [Validators.required, Validators.pattern('(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}')]),
    // tslint:disable-next-line:max-line-length
    customerEmail: new FormControl('', [Validators.required, Validators.pattern('^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$')]),
    customerAddress: new FormControl('', [Validators.required])
  });
  customerTypes: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });
  }

  submit() {
    const customer = this.customerForm.value;
    customer.customerType = {
      customerTypeId: customer.customerType
    };
    console.log(customer);
    this.customerService.saveCustomer(customer).subscribe(() => {
      alert('tạo thành công');
      this.customerForm.reset();
    }, error => console.log(error));
  }

}
