import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentConfig, PaymentConfigApi, PaymentConfigDTO, TypesDTO } from 'src/app/api/payment-config/payment-config-api';
import { PaymentTypeApi } from 'src/app/api/payment-type/payment-type-api';
import { ProcurementMethodApi } from 'src/app/api/procurement-method/procurement-method-api';
import { ProcurementNatureApi } from 'src/app/api/procurement-nature/procurement-nature-api';
import { PaymentType } from 'src/app/payment-type/payment-type-interface';
import { ProcurementMethodDTO } from 'src/app/procurement-method/procurement-method-interface';
import { ProcurementNature } from 'src/app/procurement-nature/procurement-nature-interface';
import { ToastService } from 'src/app/_services/toast.service';


@Component({
  selector: 'app-payment-config-update',
  templateUrl: './payment-config-update.component.html',
  styleUrls: ['./payment-config-update.component.css']
})
export class PaymentConfigUpdateComponent implements OnInit {


  id: number;

  procurementMethods: ProcurementMethodDTO[] = [];
  procurementNatures: ProcurementNature[] = [];
  paymentTypes: PaymentType[] = [];
  selectedPaymentTypes: number[] = [];
  paymentConfig: PaymentConfig = {
    id: 0,
    procurementNatureId: 0,
    procurementMethodId: 0
  };

  paymentConfigUpdateForm: FormGroup;


  constructor(private fb: FormBuilder,
    private procurementNatureApi: ProcurementNatureApi,
    private toastService: ToastService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
    private paymentTypeApi: PaymentTypeApi,
    private paymentConfigApi: PaymentConfigApi,
    private procurementMethodApi: ProcurementMethodApi) {

    this.id = this.route.snapshot.params['paymentConfigId'];

    this.paymentConfigUpdateForm = this.fb.group({
      procurementNatureId: ['', Validators.required],
      procurementMethodId: ['', Validators.required],
      types: []
    });

  }

  ngOnInit(): void {
    this.getPaymentConfig(this.id);
    this.getAllPaymentType();
    this.getSelectedPaymentTypes(this.id);
    this.getAllProcurementNature();
    this.getAllProcurementMethod();
  }

  update() {

    console.log("values: ", this.paymentConfigUpdateForm.value);
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

  getAllPaymentType() {
    this.paymentTypeApi.getAll()
      .then(res => {
        this.paymentTypes = res;
        console.log("paymentTypes: ", this.paymentTypes);
      }).catch(err => {
        console.log(err);
      });
  }

  getPaymentConfig(id: number) {
    this.paymentConfigApi.get(id)
      .then(res => {
        this.paymentConfig = res;
        console.log("paymentConfig", this.paymentConfig)
      }).catch(err => {
        console.log(err);
      })
  }


  getSelectedPaymentTypes(id: number) {
    this.paymentConfigApi.getAllData(id)
      .then(res => {
        console.log("res", res);
        for (let j = 0; j < this.paymentTypes.length; j++) {

          for (let i = 0; i < res.payments.length; i++) {
            if (res.payments[i].active === true && res.payments[i].paymentType===this.paymentTypes[j].type) {
              this.selectedPaymentTypes.push(this.paymentTypes[j].id);
            }
          }
        }
        console.log("selectedPaymentTypes: ", this.selectedPaymentTypes);
      }).catch(err => {
        console.log(err);
      })
  }
}
