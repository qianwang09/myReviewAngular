import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {Observable } from "rxjs/Rx";
// import 'rxjs/add/operator/toPromise';
import 'rxjs';

import { InputTextModule, DataTableModule, ButtonModule, DialogModule, TooltipModule, ConfirmDialogModule, ConfirmationService, 
  GrowlModule, TabViewModule, DropdownModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { MyReviewService } from './service/MyReviewService'
import { DatePipe } from '@angular/common';
import { DateformatPipe } from './pipe/DateformatPipe';


@NgModule({
  declarations: [
    AppComponent,
    DateformatPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    TooltipModule,
    ConfirmDialogModule,
    GrowlModule,
    TabViewModule,
    DropdownModule
  ],
  providers: [MyReviewService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
