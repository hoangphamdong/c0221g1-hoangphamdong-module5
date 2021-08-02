import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../../model/customers/customer';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CustomerType} from '../../model/customerTypes/customer-type';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(API_URL + '/customerType');
  }
}
