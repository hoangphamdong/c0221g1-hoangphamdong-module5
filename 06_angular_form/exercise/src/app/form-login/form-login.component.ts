import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  constructor() {
  }

  countryList = [
    {
      id: 1, name: 'Việt Nam'
    },
    {
      id: 2, name: 'Hồng Kông'
    },
    {
      id: 3, name: 'USA'
    },
    {
      id: 4, name: 'Korea'
    }
  ];

  signUp = new FormGroup({
    // tslint:disable-next-line:max-line-length
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z][\\w-]+@([\\w]+\\.[\\w]+|[\\w]+\\.[\\w]{2,}\\.[\\w]{2,})$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl(),
    country: new FormControl('', [Validators.required]),
    age: new FormControl(),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.pattern(' /^\\+84\\d{9,10}$/')])
  });

  get email() {
    return this.signUp.get('email');
  }

  get password() {
    return this.signUp.get('password');
  }

  get confirmPassword() {
    return this.signUp.get('confirmPassword');
  }

  get country() {
    return this.signUp.get('country');
  }

  get age() {
    return this.signUp.get('age');
  }

  get gender() {
    return this.signUp.get('gender');
  }

  get phone() {
    return this.signUp.get('phone');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signUp);
  }
}
