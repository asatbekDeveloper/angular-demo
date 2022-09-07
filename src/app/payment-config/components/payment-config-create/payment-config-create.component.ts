import { PaymentTypeApi } from './../../../api/payment-type/payment-type-api';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProcurementMethodApi } from 'src/app/api/procurement-method/procurement-method-api';
import { ProcurementNatureApi } from 'src/app/api/procurement-nature/procurement-nature-api';
import { PaymentType } from 'src/app/payment-type/payment-type-interface';
import { ProcurementMethodDTO } from 'src/app/procurement-method/procurement-method-interface';
import { ProcurementNature } from 'src/app/procurement-nature/procurement-nature-interface';
import { ToastService } from 'src/app/_services/toast.service';
import { TypesDTO } from 'src/app/api/payment-config/payment-config-api';


@Component({
  selector: 'app-payment-config-create',
  templateUrl: './payment-config-create.component.html',
  styleUrls: ['./payment-config-create.component.css']
})
export class PaymentConfigCreateComponent implements OnInit {

  procurementMethods: ProcurementMethodDTO[] = [];
  procurementNatures: ProcurementNature[] = []
  paymentConfigCreateForm: FormGroup;
  paymentTypes: PaymentType[] = [];
  types:TypesDTO[]=[];
  toppings = new FormControl('');


  constructor(private fb: FormBuilder,
    private procurementNatureApi: ProcurementNatureApi,
    private toastService: ToastService,
    private modalService: NgbModal,
    private paymentTypeApi:PaymentTypeApi,
    private procurementMethodApi: ProcurementMethodApi) {

    this.paymentConfigCreateForm = this.fb.group({
      procurementNatureId: ['', Validators.required],
      procurementMethodId: ['', Validators.required],
      types: []
    });

  }

  ngOnInit(): void {
    this.getAllProcurementNature();
    this.getAllProcurementMethod();
    this.getAllPaymentType();
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  save() {
    const val = this.paymentConfigCreateForm.value;
    console.log("formData: ", val)
    this.modalService.dismissAll();
  }


  getAllProcurementNature() {
    this.procurementNatureApi.getAll()
      .then(res => {
        this.procurementNatures = res;
      }).catch(err => {
        console.log(err);
      });
  }

  getAllProcurementMethod() {
    this.procurementMethodApi.getAll()
      .then(res => {
        this.procurementMethods = res;

        console.log("procurementMethods: ", this.procurementMethods);
      }).catch(err => {

        console.log(err);
      });
  }

  getAllPaymentType(){
    this.paymentTypeApi.getAll()
    .then(res => {
      this.paymentTypes = res;

      console.log("paymentTypes: ", this.paymentTypes);
    }).catch(err => {

      console.log(err);
    });
  }


}
