import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FinancialYearApi } from 'src/app/api/financial-year/financial-year-api';

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
    private financialYearApi:FinancialYearApi) {
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
      const year=val.yearFrom+'-'+val.yearTo;
      if (val.isDefault != true) {
        val.isDefault = false;
      }

      this.financialYearApi.save(year, val.isDefault)
        .then(res => {
          console.log("response: ",res);
          this.router.navigateByUrl("/financial-year");
        }).catch(err => {
          console.log(err);
        });
    }
  }

}
