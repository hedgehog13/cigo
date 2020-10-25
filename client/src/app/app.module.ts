import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {OrdersListComponent} from './orders/orders-list/orders-list.component';
import { ConfirmationDialogComponent } from './orders/confirmation-dialog/confirmation-dialog.component';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddOrderComponent,
    OrdersListComponent,
    ConfirmationDialogComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ToastModule,
    RippleModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmationDialogComponent ],
})
export class AppModule { }
