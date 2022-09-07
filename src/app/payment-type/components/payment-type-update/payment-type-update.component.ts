import { PaymentTypeApi } from './../../../api/payment-type/payment-type-api';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentType } from '../../payment-type-interface';
import { ToastService } from 'src/app/_services/toast.service';


@Component({
  selector: 'app-payment-type-update',
  templateUrl: './payment-type-update.component.html',
  styleUrls: ['./payment-type-update.component.css']
})
export class PaymentTypeUpdateComponent implements OnInit {

  id: number;
  paymentType: PaymentType={
    id: 0,
    type: ''
  }
  paymentTypeUpdateForm: FormGroup;

  constructor(private paymentTypeApi: PaymentTypeApi,
    private route: ActivatedRoute,
    private router: Router,
    private toastService:ToastService,
    private fb: FormBuilder,) {

    this.paymentTypeUpdateForm = this.fb.group({
      id: '',
      type: ['', Validators.required]
    });

    this.id = this.route.snapshot.params['paymentTypeId'];
    this.paymentTypeApi.get(this.id)
      .then(res => {
        console.log("get: ", res);

        this.paymentType = {
          id: res.id,
          type: res.type
        };

      });
  }

  ngOnInit(): void {

  }

  update() {

    const val = this.paymentTypeUpdateForm.value;

    if (val.type) {

      this.paymentTypeApi.update(this.id, val.type)
        .then(res => {
          console.log("response: ", res);
          this.router.navigateByUrl("/payment-type");
          this.toastService.show('SuccessFully Updated', {
            classname: 'bg-info text-light',
            delay: 2000 ,
            autohide: true
          });
        }).catch(err => {
          console.log(err);
        });
    }
  }

}
