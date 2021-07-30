import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSlideComponent } from './image-slide/image-slide.component';
import {ImgSliderModule} from './image-slide/img-slider/img-slider.module';

@NgModule({
  declarations: [
    AppComponent,
    ImageSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImgSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
