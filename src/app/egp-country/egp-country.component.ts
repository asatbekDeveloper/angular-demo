import { EgpCountryApi } from './../api/egp-country/egp-country-api';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EgpCountryDTO } from './egp-country-interface';

@Component({
  selector: 'app-egp-country',
  templateUrl: './egp-country.component.html',
  styleUrls: ['./egp-country.component.css']
})
export class EgpCountryComponent implements OnInit {

  egpCountries: EgpCountryDTO[] = [];
  isLoading = true;

  constructor(private egpCountryApi: EgpCountryApi,
    private router: Router) {

  }

  ngOnInit(): void {
    this.getAll();
  }


  delete(id: any) {
    console.log("id: ", id);
    if (window.confirm('Are you sure you want to delete this item')) {
      this.egpCountryApi.delete(id)
        .then(res => {
          console.log("response: ", res);
          this.getAll();
        }).catch(err => {
          console.log(err);
        });
    }
  }


  getAll() {
    this.egpCountryApi.getAll()
      .then(res => {
        this.egpCountries = res;
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
        console.log("egpCountries: ", this.egpCountries);
      }).catch(err => {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
        console.log(err);
      });
  }

}
