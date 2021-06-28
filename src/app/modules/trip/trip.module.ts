import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TripRoutingModule } from './trip-routing.module';
import { TripComponent } from './trip.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    TripComponent
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    HttpClientModule,
    TripRoutingModule
  ]
})
export class TripModule { }
