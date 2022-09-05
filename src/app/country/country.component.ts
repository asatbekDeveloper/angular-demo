import { Component, OnInit } from '@angular/core';
import { ApiClient } from "../api/repository/country-api";

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

  countries: Country[] = []
  constructor(private apiClient: ApiClient) {

  }

  ngOnInit(): void {
    this.apiClient.getAll()
      .then(res => {
        console.log(res);
        this.countries = res;
      });
  }


}

