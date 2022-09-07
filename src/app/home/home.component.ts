import { Component, OnInit } from '@angular/core';
import { ToastService } from '../_services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public toastService: ToastService
  ) {}

  ngOnInit(): void {
  }


  showSuccess() {
    this.toastService.show('Successfully Created', {
      classname: 'bg-success text-light',
      delay: 2000 ,
      autohide: true
    });
  }
  showError() {
    this.toastService.show('SuccessFully Deleted', {
      classname: 'bg-danger text-light',
      delay: 2000 ,
      autohide: true
    });
  }


}
