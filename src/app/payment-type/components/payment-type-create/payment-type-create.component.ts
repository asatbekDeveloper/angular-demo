import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentTypeApi } from 'src/app/api/payment-type/payment-type-api';
import { ToastService } from 'src/app/_services/toast.service';

@Component({
  selector: 'app-payment-type-create',
  templateUrl: './payment-type-create.component.html',
  styleUrls: ['./payment-type-create.component.css']
})
export class PaymentTypeCreateComponent implements OnInit {

  paymentTypeCreateForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastService:ToastService,
    private paymentTypeApi: PaymentTypeApi) {
    this.paymentTypeCreateForm = this.fb.group({
      type: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  save() {
    const val = this.paymentTypeCreateForm.value;

    if (val.type) {
      console.log(val.type);

      this.paymentTypeApi.save(val.type)
        .then((res: any) => {
          console.log("response: ", res);
          this.router.navigateByUrl("/payment-type");
          this.toastService.show('SuccessFully Created', {
            classname: 'bg-success text-light',
            delay: 2000 ,
            autohide: true
          });
        }).catch((err: any) => {
          console.log(err);
        });
    }
  }
}
