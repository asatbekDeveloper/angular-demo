import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CountryApi } from 'src/app/api/country/country-api';
import { Country } from 'src/app/country/country.component';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/_services/toast.service';
import { KeyWordBaseApi } from 'src/app/api/keyword-base/keyword-base-api';


@Component({
  selector: 'app-keyword-base-create',
  templateUrl: './keyword-base-create.component.html',
  styleUrls: ['./keyword-base-create.component.css']
})
export class KeywordBaseCreateComponent implements OnInit {

  countries: Country[] = [];
  keywordBaseCreateForm:FormGroup;

  constructor(private fb: FormBuilder,
    private countryApi: CountryApi,
    private router: Router,
    private keywordBaseApi: KeyWordBaseApi,
    private toastService:ToastService) {

      this.keywordBaseCreateForm = this.fb.group({
        genericName: ['', Validators.required],
        countryId:['', Validators.required],
        wiseName:['', Validators.required]
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
    const val = this.keywordBaseCreateForm.value;

    if (val.countryId && val.genericName && val.wiseName) {

      this.keywordBaseApi.save(val.genericName,val.countryId,val.wiseName)
        .then((res: any) => {
          console.log("response: ", res);
          this.router.navigateByUrl("/keyword-base");

            this.toastService.show('SuccessFully Created', {
              classname: 'bg-success text-light',
              delay: 2000 ,
              autohide: true
            });

        }).catch((err: any) => {
          console.log(err);
        });
    }
  }


}
