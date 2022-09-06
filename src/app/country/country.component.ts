import { Component, OnInit } from '@angular/core';
import { CountryApi } from "../api/country/country-api";

interface Country {
  id: number;
  name: string;
  code: string;
}

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit {

  countries: Country[] = [];
  isLoading = true;
  displayedColumns: string[] = ['id', 'name', 'code'];

  constructor(private countryApi: CountryApi) {

  }

  ngOnInit(): void {
    this.countryApi.getAll()
      .then(res => {
        console.log("countries: ", this.countries);
        this.countries = res;
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);

      }).catch(err => {
        console.log(err);
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      });
  }



}

