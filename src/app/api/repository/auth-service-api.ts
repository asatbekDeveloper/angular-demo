import { Injectable } from "@angular/core";
import axios from "axios";
import * as moment from "moment";


@Injectable({
  providedIn: "root"
})
export class AuthService {

  constructor() {
  }

  async login(username: string, password: string) {

    return axios.post('http://localhost:9595/login', { username, password })
      .then(res => {
        console.log(res);
        console.log("Set Session Start");
        this.setSession(res.data.body);
        console.log("Set Session End");
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

    console.log("accessToken",authResult.accessToken);

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
