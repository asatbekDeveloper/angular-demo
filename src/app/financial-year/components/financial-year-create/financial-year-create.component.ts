import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FinancialYearApi } from 'src/app/api/financial-year/financial-year-api';
import { ToastService } from 'src/app/_services/toast.service';



@Component({
  selector: 'app-financial-year-create',
  templateUrl: './financial-year-create.component.html',
  styleUrls: ['./financial-year-create.component.css']
})
export class FinancialYearCreateComponent implements OnInit {

  financialYearCreateForm: FormGroup;

  ngOnInit(): void {
  }

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastService:ToastService,
    private financialYearApi: FinancialYearApi) {
    this.financialYearCreateForm = this.fb.group({
      yearFrom: ['', Validators.required],
      yearTo: ['', Validators.required],
      isDefault: ['', Validators.required]
    });
  }


  save() {

    const val = this.financialYearCreateForm.value;

    if (val.yearFrom && val.yearTo) {
      console.log("YearFrom: ", val.yearFrom, " YearTo: ", val.yearTo, " Default: ", val.isDefault);
      const year = val.yearFrom + '-' + val.yearTo;
      if (val.isDefault != true) {
        val.isDefault = false;
      }

      this.financialYearApi.save(year, val.isDefault)
        .then((res: any) => {
          console.log("response: ", res);
          this.router.navigateByUrl("/financial-year");
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
