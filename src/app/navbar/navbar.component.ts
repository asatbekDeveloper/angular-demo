import { KeyWordBaseApi } from 'src/app/api/keyword-base/keyword-base-api';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../api/auth/auth-service-api';
import { KeywordBase, MenuDTO } from '../keyword-base/keyword-base-interface';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuList: string[] = [
    'country', 'financial-year', 'procurement-nature',
    'payment-type', 'egp-country', 'keyword-base',
    'procurement-method', 'payment-config'
  ];

  keywordMenuList: KeywordBase[] = [];

  menues: MenuDTO[] = [];

  constructor(
    public authService: AuthService,
    private router: Router,
    private keywordBaseApi: KeyWordBaseApi) { }

  ngOnInit(): void {
    let accessToken = localStorage.getItem("accessToken");
    if (accessToken != null) {
      this.getMenuList();
    }
  }

  logout() {
    this.authService.logout();
    window.location.reload();
    this.router.navigate(['/login']);
  }

  getMenuList() {
    this.keywordBaseApi.getKeywords()
      .then(res => {
        this.keywordMenuList = res;
        console.log("response: ", this.keywordMenuList);
        this.getMenues();
      }).catch(err => {
        console.log(err);
      })
  }

  getMenues() {
    for (let i = 0; i < this.menuList.length; i++) {

      let found = false;

      for (let j = 0; j < this.keywordMenuList.length; j++) {

        if (this.keywordMenuList[j].genericName === this.menuList[i]) {
          found = true;
          this.menues.push({
            genericName: this.keywordMenuList[j].genericName,
            wiseName: this.keywordMenuList[j].wiseName
          });
          break;
        }

      }

      if (found === false) {
        this.menues.push({
          genericName: this.menuList[i],
          wiseName: "Default " + this.menuList[i]
        });
      }
    }
  }


}
