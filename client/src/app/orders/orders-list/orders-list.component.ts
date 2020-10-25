import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrdersService} from "../orders.service";
import {ConfirmationDialogService} from "../confirmation-dialog/confirmation-dialog.service";
import {MessageService, PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
  providers: [MessageService, PrimeNGConfig]
})
export class OrdersListComponent implements OnInit, OnDestroy {

  ordersListSub$;

  status = [{name: 'Pending', value: 0},
    {name: 'Assigned', value: 1}, {name: 'On Route', value: 2}, {name: 'Done', value: 3}, {
      name: 'Cancelled',
      value: 4
    }];


  constructor(private ordersSrv: OrdersService,
              private messageService: MessageService, private primengConfig: PrimeNGConfig,
              private confirmationDialogService: ConfirmationDialogService) {
  }


  ngOnInit() {
    this.primengConfig.ripple = true;
    this.ordersListSub$ = this.ordersSrv.getOrdersData().subscribe();
    this.ordersSrv.orderId$.subscribe(() => {
      this.ordersListSub$ = this.ordersSrv.getOrdersData();
    })

  }
  showSuccess(message) {
    this.messageService.add({severity: 'success', summary: 'Success', detail: `${message}`});
  }
  updateAction(id, e) {
    this.ordersSrv.updateStatus(id, e.target.value).subscribe(()=>{
      this.showSuccess('Order has been updated');
    });
  }

  deleteOrder(order_id) {
    this.openConfirmationDialog(order_id);

  }


  public openConfirmationDialog(order_id) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => {
        if (confirmed) {
          this.ordersSrv.removeOrder(order_id).subscribe(()=>this.showSuccess('Order has been deleted'));
        }
      }).catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  ngOnDestroy(): void {
    this.ordersSrv.orderId$.unsubscribe();
    this.ordersSrv.isLoadnig$.unsubscribe();
  }
}


