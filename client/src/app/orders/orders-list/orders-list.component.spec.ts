import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersListComponent } from './orders-list.component';
import {ToastModule} from "primeng/toast";
import {RippleModule} from "primeng/ripple";
import {MessageService, PrimeNGConfig} from "primeng/api";
import {OrdersService} from "../orders.service";
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('OrdersListComponent', () => {
  let component: OrdersListComponent;
  let fixture: ComponentFixture<OrdersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersListComponent ],
      imports:[ToastModule,
        RippleModule,
        HttpClientTestingModule ],
      providers:[MessageService, PrimeNGConfig, OrdersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
