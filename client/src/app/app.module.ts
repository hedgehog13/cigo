import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddOrderComponent } from './add-order/add-order.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { OrderItemComponent } from './orders/order-item/order-item.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { OrdersListComponent } from './orders/orders-list/orders-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddOrderComponent,
    OrderItemComponent,
    OrdersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
