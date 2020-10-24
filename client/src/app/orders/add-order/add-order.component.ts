import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AddOrderService} from "./add-order.service";
import {IOrderModel} from "./order.model";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription$: Subscription;

  constructor(private addOrderSrv: AddOrderService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    const order: IOrderModel = {
      first_name: form.value.fName,
      last_name: form.value.lName,
      phone: form.value.phone,
      email: form.value.email,
      scheduled_date: form.value.scheduleDate,
      address: form.value.address,
      city: form.value.inputCity,
      country: form.value.country,
      zipCode: form.value.inputZip,
      state: form.value.state,

    };
    this.subscription$ = this.addOrderSrv.addOrder(order).subscribe();
  }

  resetForm() {
    this.slForm.resetForm();
  }


  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
