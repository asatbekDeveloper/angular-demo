import { Component, OnInit } from '@angular/core';
import { KeywordBaseDTO } from '../../keyword-base-interface';
import { Country } from 'src/app/country/country.component';
import { CountryApi } from 'src/app/api/country/country-api';
import { KeyWordBaseApi } from 'src/app/api/keyword-base/keyword-base-api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/_services/toast.service';


@Component({
  selector: 'app-keyword-base-update',
  templateUrl: './keyword-base-update.component.html',
  styleUrls: ['./keyword-base-update.component.css']
})
export class KeywordBaseUpdateComponent implements OnInit {

  id: number;

  keywordBase: KeywordBaseDTO = {
    id: 0,
    genericName: '',
    country: '',
    wiseName: ''
  };

  countryId: number=0;

  keywordBaseUpdateForm: FormGroup;


  countries: Country[] = [];

  constructor(private keywordBaseApi: KeyWordBaseApi,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private countryApi: CountryApi,
    private toastService: ToastService) {

    this.keywordBaseUpdateForm = this.fb.group({
      genericName: ['', Validators.required],
      countryId: ['', Validators.required],
      wiseName: ['', Validators.required]
    });

    this.id = this.route.snapshot.params['keywordBaseId'];
    this.getKeywordBase(this.id);
  }

  getKeywordBase(id: number) {
    this.keywordBaseApi.get(this.id)
      .then(res => {
        console.log("get: ", res);
        this.keywordBase = res;
        this.getCountryByName(res.country);
      });
  }

  getCountryByName(name: string) {
    this.countryApi.getByName(name)
      .then(res => {
        this.countryId = res.id;
      }).catch(err => {
        console.log(err);
      })
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


  update() {

    const val = this.keywordBaseUpdateForm.value;
    console.log("value: ", val);

    if (val.countryId && val.genericName && val.wiseName) {


      this.keywordBaseApi.update(this.id, val.genericName, val.countryId, val.wiseName)
        .then(res => {
          console.log("response: ", res);
          this.router.navigateByUrl("/keyword-base");
          this.toastService.show('SuccessFully Updated', {
            classname: 'bg-info text-light',
            delay: 2000,
            autohide: true
          });
        }).catch(err => {
          console.log(err);
        });
    }
  }

}
