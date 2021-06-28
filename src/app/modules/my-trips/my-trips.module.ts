import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlatpickrModule} from 'angularx-flatpickr';

import { MyTripsRoutingModule } from './my-trips-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    MyTripsRoutingModule
  ]
})
export class MyTripsModule { }
