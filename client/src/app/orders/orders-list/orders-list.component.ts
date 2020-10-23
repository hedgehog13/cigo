import {Component, OnInit} from '@angular/core';
import {OrdersService} from "../orders.service";

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {


  actions = ['ASSIGNED', 'PENDING', 'ON ROUTE', 'CANCELLED', 'DONE'];
  ordersListSub$;

  constructor(private ordersSrv: OrdersService) {
  }

  ngOnInit() {
    this.ordersListSub$ = this.ordersSrv.getOrdersData()
  }

  updateAction(id,e) {

  this.ordersSrv.updateStatus(id, e.innerText);
  }

  deleteOrder(index) {
    this.ordersSrv.removeOrder();
  }
}
