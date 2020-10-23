import {Component, OnInit, ViewChild} from '@angular/core';
import {AddOrderService} from "./add-order.service";
import {IOrderModel} from "./order.model";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;

  constructor(private addOrderSrv: AddOrderService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const order: IOrderModel = {

      firstName: form.value.fName,

      lastName: form.value.lName,
      phone: form.value.phone,
      email: form.value.email,
      scheduleDate: form.value.scheduleDate,
      address: form.value.address,
      city: form.value.inputCity,
      country: form.value.country,
      zipCode: form.value.inputZip,
      state: form.value.state,

    };
    this.addOrderSrv.addOrder(order).subscribe(data => {
      console.log(data);
    });
  }

  resetForm() {
    this.slForm.resetForm();
  }
}
