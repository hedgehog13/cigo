import {Injectable} from '@angular/core';


import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {IOrderModel} from "./order.model";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  endpoint: string = 'http://localhost:8000/api';
  orderId$ = new BehaviorSubject(null);
  API_URL = `${this.endpoint}/order`;

  constructor(private http: HttpClient) {
  }

  addOrder(order: IOrderModel): Observable<any> {
    const json = JSON.stringify(order);
    return this.http.post<any>(this.API_URL, json, this.httpOptions).pipe(
      map(res => {
        console.log(res);
        if (res) {
          this.orderId$.next(res);
        }
      }),
      catchError(this.errorMgmt)
    );
  }


  getOrdersData(): Observable<any> {

    return this.http.get(this.API_URL, this.httpOptions);
  }

  updateStatus(item, action) {
    const updatedItem = {
      ...item,
      status_id: action,
    }
    const json = JSON.stringify(updatedItem);

    return this.http.put<any>(this.API_URL, json, this.httpOptions).pipe(
      map(res => {

        if (res) {
          this.orderId$.next(res);
        }
      }),
      catchError(this.errorMgmt)
    );

  }

  removeOrder(orderId) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: orderId,

      },
    };
    return this.http.delete<any>(this.API_URL, options).pipe(
      map((res) => {
        console.log('removeOrder', res);
        if (res) {
          this.orderId$.next(res);
        }
        return res;
      }),
      catchError(this.errorMgmt)
    )

  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);
  }

}

