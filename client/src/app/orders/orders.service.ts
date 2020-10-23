import {Injectable} from '@angular/core';


import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  ordersList = [
    {
      id: 1,
      firstName: 'A',
      lastName: 'B',
      date: '15/10/2020',
      status: 'pending'
    },
    {
      id: 2,
      firstName: 'C',
      lastName: 'D',
      date: '13/11/2020',
      status: 'done'
    },
    {
      id: 12,
      firstName: 'E',
      lastName: 'F',
      date: '15/10/2020',
      status: 'on route'
    }
  ]

  constructor() {
  }

  updateStatus(item, action) {
    const itemToAdd = {...item}
    itemToAdd.status = action;

  }

  getOrdersData(): Observable<any> {

    return of(this.ordersList);
  }

  removeOrder() {
    return 'removed';

  }

  removeItem(array, action) {
    return [...array.slice(0, action.index), ...array.slice(action.index + 1)]
  }
}

