import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProcurementMethodApi } from '../api/procurement-method/procurement-method-api';
import { ToastService } from '../_services/toast.service';
import { ProcurementMethodDTO } from './procurement-method-interface';


@Component({
  selector: 'app-procurement-method',
  templateUrl: './procurement-method.component.html',
  styleUrls: ['./procurement-method.component.css']
})
export class ProcurementMethodComponent implements OnInit {

  procurementMethods: ProcurementMethodDTO[] = [];

  isLoading = true;

  constructor(private procurementMethodApi: ProcurementMethodApi,
    private router: Router,
    private toastService: ToastService) {

  }

  ngOnInit(): void {
    this.getAll();
  }


  delete(id: any) {
    console.log("id: ", id);
    if (window.confirm('Are you sure you want to delete this item')) {
      this.procurementMethodApi.delete(id)
        .then(res => {
          console.log("response: ", res);
          this.getAll();
          this.showDeleted();
        }).catch(err => {
          console.log(err);
        });
    }
  }


  getAll() {
    this.procurementMethodApi.getAll()
      .then(res => {
        this.procurementMethods = res;
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
        console.log("procurementMethods: ", this.procurementMethods);
      }).catch(err => {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
        console.log(err);
      });
  }



  showDeleted() {
    this.toastService.show('SuccessFully Deleted', {
      classname: 'bg-danger text-light',
      delay: 2000,
      autohide: true
    });
  }


}
