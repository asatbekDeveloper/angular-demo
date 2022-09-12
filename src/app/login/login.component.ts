import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../api/auth/auth-service-api';
import { ToastService } from '../_services/toast.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  ngOnInit(): void {
  }

  constructor(private fb: FormBuilder,
    public authService: AuthService,
    private router: Router, private toastService: ToastService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {

    const val = this.loginForm.value;

    if (val.username && val.password) {
      console.log("Username: ", val.username, " Password: ", val.password);
      this.authService.login(val.username, val.password)
        .then(res => {
          console.log("res: ", res);
          if (res.body != null) {
            console.log("response: ", res.body);
            this.router.navigate(['/home'])
            .then(() => {
              window.location.reload();
            });
            console.log("Added");

          } else {
            console.log("response: ", res.error);
            this.router.navigate(['/login']);
            this.toastService.show(res.error.message, {
              classname: 'bg-danger text-light',
              delay: 2000,
              autohide: true
            });
          }
        }).catch(err => {
          console.log(err);
          this.router.navigateByUrl('/login');
        });
    }
  }

}
