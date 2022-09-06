import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProcurementNatureApi } from 'src/app/api/procurement-nature/procurement-nature-api';

@Component({
  selector: 'app-procurement-nature-create',
  templateUrl: './procurement-nature-create.component.html',
  styleUrls: ['./procurement-nature-create.component.css']
})
export class ProcurementNatureCreateComponent implements OnInit {

  procurementNatureForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private procurementNatureApi: ProcurementNatureApi) {
    this.procurementNatureForm = this.fb.group({
      id: '',
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  save() {
    const val = this.procurementNatureForm.value;

    if (val.name) {
      console.log(val.name);

      this.procurementNatureApi.save(0, val.name)
        .then((res: any) => {
          console.log("response: ", res);
          this.router.navigateByUrl("/procurement-nature");
        }).catch((err: any) => {
          console.log(err);
        });
    }
  }

}
