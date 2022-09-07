import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProcurementNatureApi } from '../api/procurement-nature/procurement-nature-api';
import { ToastService } from '../_services/toast.service';
import { ProcurementNature } from './procurement-nature-interface';



@Component({
  selector: 'app-procurement-nature',
  templateUrl: './procurement-nature.component.html',
  styleUrls: ['./procurement-nature.component.css']
})
export class ProcurementNatureComponent implements OnInit {

  procurementNatures: ProcurementNature[] = [];
  isLoading = true;

  constructor(private procurementNatureApi: ProcurementNatureApi,
    private router: Router,private toastService:ToastService) {

  }

  ngOnInit(): void {
    this.getAll();
  }


  delete(id: any) {
    console.log("id: ", id);
    if (window.confirm('Are you sure you want to delete this item')) {
      this.procurementNatureApi.delete(id)
        .then(res => {
          console.log("response: ", res);
          this.getAll();
          this.toastService.show('SuccessFully Deleted', {
            classname: 'bg-danger text-light',
            delay: 2000 ,
            autohide: true
          });
        }).catch(err => {
          console.log(err);
        });
    }
  }


  getAll() {
    this.procurementNatureApi.getAll()
      .then(res => {
        this.procurementNatures = res;
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
        console.log("procurementNatures: ", this.procurementNatures);
      }).catch(err => {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
        console.log(err);
      });
  }

}
