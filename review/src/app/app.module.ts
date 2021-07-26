import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import {FormsModule} from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { StudentCreateComponent } from './student-create/student-create.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentInfoComponent,
    StudentListComponent,
    StudentCreateComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
