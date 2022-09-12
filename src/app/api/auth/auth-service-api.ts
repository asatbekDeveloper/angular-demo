import { Injectable } from "@angular/core";
import axios from "axios";
import { BehaviorSubject } from 'rxjs';
import * as moment from "moment";
import { Router } from '@angular/router';


@Injectable({
  providedIn: "root"
})
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(public router: Router) {
    let accessToken = localStorage.getItem("accessToken");
    this._isLoggedIn$.next(!!accessToken);
  }

  async login(username: string, password: string) {

    return axios.post('http://localhost:9595/login', { username, password })
      .then(res => {
        console.log(res);
        if (res.data.body != null) {
          this.setSession(res.data.body);
        }
        return res.data;
      }).catch(err => {
        console.log(err);
      }
      );
  }


  private setSession(authResult:
    {
      expiresAt: moment.DurationInputArg1;
      refreshExpiresAt: moment.DurationInputArg1;
      accessToken: string;
      refreshToken: string;
    }) {

    console.log(authResult);

    console.log("accessToken", authResult.accessToken);

    const expiresAt = moment().add(authResult.expiresAt, 'second');
    const refreshExpiresAt = moment().add(authResult.refreshExpiresAt, 'second');

    localStorage.setItem('accessToken', authResult.accessToken);
    localStorage.setItem("expiresAt", JSON.stringify(expiresAt.valueOf()));

    localStorage.setItem('refreshToken', authResult.refreshToken);
    localStorage.setItem("refreshExpiresAt", JSON.stringify(refreshExpiresAt.valueOf()));


  }

  logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("expiresAt");

    localStorage.removeItem("refreshToken");
    localStorage.removeItem("refreshExpiresAt");

  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }


  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiresAt = JSON.parse(localStorage.getItem('expiresAt') || '{}');
    return moment(expiresAt);
  }

}
