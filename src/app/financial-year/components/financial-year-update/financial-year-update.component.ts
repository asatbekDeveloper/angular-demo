import { FinancialYearUpdateDTO } from './../../financial-year-interface';
import { Component, OnInit } from '@angular/core';
import { FinancialYearApi } from 'src/app/api/financial-year/financial-year-api';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/_services/toast.service';

@Component({
  selector: 'app-financial-year-update',
  templateUrl: './financial-year-update.component.html',
  styleUrls: ['./financial-year-update.component.css']
})
export class FinancialYearUpdateComponent implements OnInit {

  id: number;
  financialYear: FinancialYearUpdateDTO={
    id: 0,
    yearFrom: '',
    yearTo: '',
    default: false
  };
  financialYearUpdateForm: FormGroup;

  constructor(private financialYearApi: FinancialYearApi,
    private route: ActivatedRoute,
    private router: Router,
    private toastService:ToastService,
    private fb: FormBuilder,) {

    this.financialYearUpdateForm = this.fb.group({
      yearFrom: ['', Validators.required],
      yearTo: ['', Validators.required],
      isDefault: ['', Validators.required]
    });
    this.id = this.route.snapshot.params['financialYearId'];
    this.financialYearApi.get(this.id)
      .then(res => {
        console.log("get: ", res);

        let years: string = res.year;
        let yearFrom = years.substring(0, years.indexOf('-'));
        let yearTo = years.substring(years.indexOf('-') + 1);
        this.financialYear = {
          id: res.id,
          yearFrom: yearFrom,
          yearTo: yearTo,
          default: res.default
        };

      });
  }

  ngOnInit(): void {

  }

  update() {

    const val = this.financialYearUpdateForm.value;

    if (val.yearFrom && val.yearTo) {
      console.log("YearFrom: ", val.yearFrom, " YearTo: ", val.yearTo, " Default: ", val.isDefault);
      const year=val.yearFrom+'-'+val.yearTo;
      if (val.isDefault != true) {
        val.isDefault = false;
      }

      this.financialYearApi.update(this.id,year, val.isDefault)
        .then(res => {
          console.log("response: ",res);
          this.router.navigateByUrl("/financial-year");
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
