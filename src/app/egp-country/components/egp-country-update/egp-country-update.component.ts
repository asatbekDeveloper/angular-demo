import { Component, OnInit } from '@angular/core';
import { EgpCountryApi } from 'src/app/api/egp-country/egp-country-api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/country/country.component';
import { CountryApi } from 'src/app/api/country/country-api';
import { EgpCountry } from '../../egp-country-interface';
import { ToastService } from 'src/app/_services/toast.service';

@Component({
  selector: 'app-egp-country-update',
  templateUrl: './egp-country-update.component.html',
  styleUrls: ['./egp-country-update.component.css']
})
export class EgpCountryUpdateComponent implements OnInit {

  id: number;

  egpCountry: EgpCountry = {
    id: 0,
    default: false,
    countryId: ''
  };

  egpCountryUpdateForm: FormGroup;


  countries: Country[] = [];

  constructor(private egpCountryApi: EgpCountryApi,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private countryApi: CountryApi,
    private toastService:ToastService) {

    this.egpCountryUpdateForm = this.fb.group({
      id: '',
      isDefault: '',
      countryId: ['', Validators.required]
    });

    this.id = this.route.snapshot.params['egpCountryId'];
    this.getEgpCountry(this.id);
  }

  getEgpCountry(id: number) {
    this.egpCountryApi.get(this.id)
    .then(res => {
      console.log("get: ", res);
      this.egpCountry.default = res.default;
      this.getCountryByName(res.countryName);
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

  getCountryByName(name: string) {
    this.egpCountryUpdateForm.value.countryId;
    this.countryApi.getByName(name)
      .then(res => {
        this.egpCountry.countryId = res.id;
      }).catch(err => {
        console.log(err);
      })
  }

  update() {

    const val = this.egpCountryUpdateForm.value;
    console.log("value: ", val);

    if (val.countryId) {
      if (val.isDefault != true) {
        val.isDefault = false;
      }

      this.egpCountryApi.update(this.id, val.countryId, val.isDefault)
        .then(res => {
          console.log("response: ", res);
          this.router.navigateByUrl("/egp-country");
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
