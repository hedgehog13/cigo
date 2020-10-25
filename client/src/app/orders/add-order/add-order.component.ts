import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IOrderModel} from "../order.model";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {OrdersService} from "../orders.service";
import {MessageService, PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
  providers: [MessageService, PrimeNGConfig]
})
export class AddOrderComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription$: Subscription;
  phoneNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  countries = ['Israel', 'Canada', 'USA', 'Mexico'];

  constructor(private orderSrv: OrdersService, private messageService: MessageService, private primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  showSuccess() {
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Order has been added'});
  }

  onSubmit(form: NgForm) {
    if (form.valid) {

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
      this.subscription$ = this.orderSrv.addOrder(order).subscribe((res => {
        this.showSuccess();
      }));
    }
  }


  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
