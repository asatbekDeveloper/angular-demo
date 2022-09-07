import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeyWordBaseApi } from '../api/keyword-base/keyword-base-api';
import { ToastService } from '../_services/toast.service';
import { KeywordBaseDTO } from './keyword-base-interface';
@Component({
  selector: 'app-keyword-base',
  templateUrl: './keyword-base.component.html',
  styleUrls: ['./keyword-base.component.css']
})
export class KeywordBaseComponent implements OnInit {

  keywordBases: KeywordBaseDTO[] = [];
  isLoading = true;

  constructor(private keywordBaseApi: KeyWordBaseApi,
    private router: Router,
    private toastService:ToastService) {

  }

  ngOnInit(): void {
    this.getAll();
  }


  delete(id: any) {
    console.log("id: ", id);
    if (window.confirm('Are you sure you want to delete this item')) {
      this.keywordBaseApi.delete(id)
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
    this.keywordBaseApi.getAll()
      .then(res => {
        this.keywordBases = res;
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
        console.log("keywordBases: ", this.keywordBases);
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
      delay: 2000 ,
      autohide: true
    });
  }

}
