import {Component, Input, OnInit} from '@angular/core';
import {IOrderModel} from "../order.model";

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  actions = ['ASSIGNED', 'PENDING', 'ON ROUT', 'CANCELLED', 'DONE'];
  @Input() order_item: IOrderModel;
  @Input()item_Index;
  constructor() {
  }

  ngOnInit() {
  }
  updateAction(e){
    console.log(e)
  }
}
