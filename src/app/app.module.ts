import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {Observable } from "rxjs/Rx";
// import 'rxjs/add/operator/toPromise';
import 'rxjs';

import { InputTextModule, DataTableModule, ButtonModule, DialogModule, TooltipModule, ConfirmDialogModule, ConfirmationService, GrowlModule, TabViewModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { MyReviewHeader } from './myReviewHeader.component';
import { MyReviewService } from './service/MyReviewService'

@NgModule({
  declarations: [
    AppComponent,
    MyReviewHeader
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
    TabViewModule
  ],
  providers: [MyReviewService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
