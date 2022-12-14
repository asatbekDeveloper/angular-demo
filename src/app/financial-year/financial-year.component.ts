import { ToastService } from 'src/app/_services/toast.service';
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
  isLoading = true;

  cols = [
    { field: 'id', header: 'Id' },
    { field: 'year', header: 'Name' },
    { field: 'default', header: 'Is Default' }
];

  constructor(private financialYearApi: FinancialYearApi,
    private router: Router,private toastService:ToastService) {

  }

  ngOnInit(): void {
    this.getAll();
  }


  delete(id: any) {
    console.log("id: ", id)
    if (window.confirm('Are you sure you want to delete this item')) {
      this.financialYearApi.delete(id)
        .then(res => {
          console.log("response: ", res);
          this.getAll();
          this.toastService.show('SuccessFully Deleted', {
            classname: 'bg-danger text-light',
            delay: 2000 ,
            autohide: true
          });
        }).catch(err => {
          console.log(err);
        });
    }
  }


  getAll() {
    this.financialYearApi.getAll()
      .then(res => {
        this.financialYears = res;
        setTimeout(() => {
          this.isLoading = false;
        }, 200);
        console.log("financialYears: ", this.financialYears);
      }).catch(err => {
        setTimeout(() => {
          this.isLoading = false;
        }, 200);
        console.log(err);
      });
  }
}

