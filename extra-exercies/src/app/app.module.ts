import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './crud/student/student.component';
import { CreateComponent } from './crud/create/create.component';
import { DetailComponent } from './crud/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CreateComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
