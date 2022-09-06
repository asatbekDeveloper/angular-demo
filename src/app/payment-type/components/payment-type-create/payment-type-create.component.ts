import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentTypeApi } from 'src/app/api/payment-type/payment-type-api';

@Component({
  selector: 'app-payment-type-create',
  templateUrl: './payment-type-create.component.html',
  styleUrls: ['./payment-type-create.component.css']
})
export class PaymentTypeCreateComponent implements OnInit {

  paymentTypeCreateForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
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
        }).catch((err: any) => {
          console.log(err);
        });
    }
  }
}
