
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProcurementNatureApi } from 'src/app/api/procurement-nature/procurement-nature-api';
import { ToastService } from 'src/app/_services/toast.service';

@Component({
  selector: 'app-procurement-nature-create',
  templateUrl: './procurement-nature-create.component.html',
  styleUrls: ['./procurement-nature-create.component.css']
})
export class ProcurementNatureCreateComponent implements OnInit {

  procurementNatureForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,private toastService:ToastService,
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
