import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CountryApi } from 'src/app/api/country/country-api';
import { EgpCountryApi } from 'src/app/api/egp-country/egp-country-api';
import { Country } from 'src/app/country/country.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-egp-country-create',
  templateUrl: './egp-country-create.component.html',
  styleUrls: ['./egp-country-create.component.css']
})
export class EgpCountryCreateComponent implements OnInit {

  countries: Country[] = [];
  egpCountryCreateForm:FormGroup;

  constructor(private fb: FormBuilder,
    private countryApi: CountryApi,
    private router: Router,
    private egpCountryApi: EgpCountryApi) {

      this.egpCountryCreateForm = this.fb.group({
        countryId: ['', Validators.required],
        isDefault:''
      });

    }

  ngOnInit(): void {
    this.getAllCountries();
  }


  getAllCountries() {
    this.countryApi.getAll()
      .then(res => {
        this.countries = res;
      }).catch(err => {
        console.log(err);
      });
  }

  save(){
    const val = this.egpCountryCreateForm.value;

    if (val.countryId) {
      if (val.isDefault != true) {
        val.isDefault = false;
      }

      this.egpCountryApi.save(val.countryId, val.isDefault)
        .then((res: any) => {
          console.log("response: ", res);
          this.router.navigateByUrl("/egp-country");
        }).catch((err: any) => {
          console.log(err);
        });
    }
  }

}
