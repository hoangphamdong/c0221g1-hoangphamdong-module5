import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() {
  }

  login = new FormGroup(
    {
      // tslint:disable-next-line:max-line-length
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z][\\w-]+@([\\w]+\\.[\\w]+|[\\w]+\\.[\\w]{2,}\\.[\\w]{2,})$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }
  );

  get email() {
    return this.login.get('email');
  }

  get password() {
    return this.login.get('password');
  }

  ngOnInit(): void {
  }

  onLogin() {
    console.log(this.login);
  }
}
