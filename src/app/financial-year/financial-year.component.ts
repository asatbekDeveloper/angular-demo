import { Router } from '@angular/router';
import { FinancialYearApi } from 'src/app/api/financial-year/financial-year-api';
import { Component, OnInit } from '@angular/core';

import { FinancialYear } from './financial-year-interface';

@Component({
  selector: 'app-financial-year',
  templateUrl: './financial-year.component.html',
  styleUrls: ['./financial-year.component.css']
})
export class FinancialYearComponent implements OnInit {

  financialYears: FinancialYear[] = [];

  constructor(private financialYearApi: FinancialYearApi,
    private router: Router) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  delete(id: any) {
    console.log("id: ", id)
    this.financialYearApi.delete(id)
      .then(res => {
        console.log("response: ", res);
        this.getAll();
      }).catch(err => {
        console.log(err);
      });
  }

  getAll() {
    this.financialYearApi.getAll()
      .then(res => {
        console.log("financialYears: ", this.financialYears);
        this.financialYears = res;
      });
  }
}

