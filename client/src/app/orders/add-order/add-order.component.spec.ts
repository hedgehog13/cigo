import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddOrderComponent} from './add-order.component';
import {MessageService, PrimeNGConfig} from "primeng/api";
import {OrdersService} from "../orders.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ToastModule} from "primeng/toast";
import {RippleModule} from "primeng/ripple";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AddOrderComponent', () => {
  let component: AddOrderComponent;
  let fixture: ComponentFixture<AddOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddOrderComponent],
      imports: [
        ToastModule,
        RippleModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientTestingModule],
      providers: [MessageService, PrimeNGConfig, OrdersService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
