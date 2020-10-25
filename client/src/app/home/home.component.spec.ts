import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {AddOrderComponent} from "../orders/add-order/add-order.component";
import {OrdersListComponent} from "../orders/orders-list/orders-list.component";
import {ToastModule} from "primeng/toast";
import {RippleModule} from "primeng/ripple";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, AddOrderComponent, OrdersListComponent ],
      imports:[  ToastModule,
        RippleModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
