import { Component, ElementRef, Injectable, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { PaymentConfigApi } from '../api/payment-config/payment-config-api';
import { PaymentTypeApi } from '../api/payment-type/payment-type-api';
import { PaymentType } from '../payment-type/payment-type-interface';
import { PaymentConfigDTO } from '../api/payment-config/payment-config-api';
import { ToastService } from '../_services/toast.service';
@Injectable({
  providedIn: "root"
})
@Component({
  selector: 'app-payment-config',
  templateUrl: './payment-config.component.html',
  styleUrls: ['./payment-config.component.css']
})
export class PaymentConfigComponent implements OnInit {


  isLoading = true;
  paymentTypes: PaymentType[] = [];
  paymentConfigs: PaymentConfigDTO[] = [];

  constructor(private paymentTypeApi: PaymentTypeApi, private paymentConfigApi: PaymentConfigApi,
    private toastService: ToastService) {

  }

  ngOnInit(): void {
    this.getAllPaymentType();
    this.getAllPaymentConfig();
  }

  getAllPaymentConfig() {
    this.paymentConfigApi.getAll()
      .then(res => {
        this.paymentConfigs = res;
        setTimeout(() => {
          this.isLoading = false;
        }, 50);
        console.log("paymentConfigs: ", this.paymentConfigs);
      }).catch(err => {
        setTimeout(() => {
          this.isLoading = false;
        }, 50);
        console.log(err);
      })
  }

  getAllPaymentType() {

    this.paymentTypeApi.getAll()
      .then(res => {
        this.paymentTypes = res;
        console.log("paymentTypes: ", this.paymentTypes);
      }).catch(err => {
        console.log(err);
      });
  }

  delete(id: any) {
    console.log("id: ", id);
    if (window.confirm('Are you sure you want to delete this item')) {
      this.paymentConfigApi.delete(id)
        .then(res => {
          console.log("response: ", res);
          this.getAllPaymentConfig();
          this.showDeleted();
        }).catch(err => {
          console.log(err);
        });
    }
  }

  showDeleted() {
    this.toastService.show('SuccessFully Deleted', {
      classname: 'bg-danger text-light',
      delay: 2000,
      autohide: true
    });
  }



}
