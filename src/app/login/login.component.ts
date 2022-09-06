import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../api/auth/auth-service-api';


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
    private authService: AuthService,
    private router: Router) {
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
          console.log("response: ",res.body);
          // this.router.navigateByUrl('/');
          this.router.navigate(['/']);
        }).catch(err => {
          console.log(err);
          this.router.navigateByUrl('/login');
        });
    }
  }

}
