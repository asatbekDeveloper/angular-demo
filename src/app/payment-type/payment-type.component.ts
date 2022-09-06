import { PaymentTypeApi } from './../api/payment-type/payment-type-api';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentType } from './payment-type-interface';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrls: ['./payment-type.component.css']
})
export class PaymentTypeComponent implements OnInit {

  paymentTypes: PaymentType[] = [];
  isLoading = true;

  constructor(private paymentTypeApi: PaymentTypeApi,
    private router: Router) {

  }

  ngOnInit(): void {
    this.getAll();
  }


  delete(id: any) {
    console.log("id: ", id);
    if (window.confirm('Are you sure you want to delete this item')) {
      this.paymentTypeApi.delete(id)
        .then(res => {
          console.log("response: ", res);
          this.getAll();
        }).catch(err => {
          console.log(err);
        });
    }
  }


  getAll() {
    this.paymentTypeApi.getAll()
      .then(res => {
        this.paymentTypes = res;
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
        console.log("paymentTypes: ", this.paymentTypes);
      }).catch(err => {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
        console.log(err);
      });
  }

}
