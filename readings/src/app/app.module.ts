import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDetailComponentComponent } from './item-detail-component/item-detail-component.component';


import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ItemOutputComponentComponent } from './item-output-component/item-output-component.component';
import { AppComponentComponent } from './app-component/app-component.component';
import { MyserviceService } from './myservice.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponentComponent,
    ParentComponentComponent,
    ItemOutputComponentComponent,
    AppComponentComponent,
    NewCmpComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
