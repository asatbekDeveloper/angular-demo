import { Component, OnInit } from '@angular/core';
import { ProcurementNature } from '../../procurement-nature-interface';
import { ProcurementNatureApi } from 'src/app/api/procurement-nature/procurement-nature-api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-procurement-nature-update',
  templateUrl: './procurement-nature-update.component.html',
  styleUrls: ['./procurement-nature-update.component.css']
})
export class ProcurementNatureUpdateComponent implements OnInit {

  id: number;
  procurementNature!: ProcurementNature;
  procurementNatureUpdateForm: FormGroup;

  constructor(private procurementNatureApi: ProcurementNatureApi,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,) {

    this.procurementNatureUpdateForm = this.fb.group({
      id: '',
      name: ['', Validators.required]
    });
    
    this.id = this.route.snapshot.params['procurementNatureId'];
    this.procurementNatureApi.get(this.id)
      .then(res => {
        console.log("get: ", res);

        this.procurementNature = {
          id: res.id,
          name: res.name
        };

      });
  }

  ngOnInit(): void {

  }

  update() {

    const val = this.procurementNatureUpdateForm.value;

    if (val.name) {


      this.procurementNatureApi.update(this.id, val.name)
        .then(res => {
          console.log("response: ", res);
          this.router.navigateByUrl("/procurement-nature");
        }).catch(err => {
          console.log(err);
        });
    }
  }

}
