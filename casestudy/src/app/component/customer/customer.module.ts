import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {ShareModule} from '../../share/share.module';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';


@NgModule({
  declarations: [CustomerListComponent, CustomerDeleteComponent, CustomerCreateComponent, CustomerEditComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ShareModule,

  ]
})
export class CustomerModule { }
