import { EgpCountryApi } from 'src/app/api/egp-country/egp-country-api';
import { MenuBaseApi, DataDTO } from './../api/menu/menu-api';
import { KeyWordBaseApi } from 'src/app/api/keyword-base/keyword-base-api';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../api/auth/auth-service-api';
import { KeywordBase, MenuDTO } from '../keyword-base/keyword-base-interface';
import { MenuItem } from 'primeng/api';



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


  items: MenuItem[] = [];

  isMenuLoaded = false;
  defaultCountryId: number = 0;

  constructor(
    public authService: AuthService,
    private router: Router,
    private keywordBaseApi: KeyWordBaseApi,
    private menuApi: MenuBaseApi,
    private egpCountryApi: EgpCountryApi) {

  }

  ngOnInit(): void {
    let accessToken = localStorage.getItem("accessToken");
    if (accessToken != null) {
      this.egpCountryApi.getDefaultCountryId()
        .then(res => {
          if (res != 0) {
            this.defaultCountryId = res;
            this.getMainMenues();
          }
        }).catch(err => {
          console.log(err);
        })

    }
  }

  logout() {
    this.authService.logout();
    window.location.reload();
    this.router.navigate(['/login']);
  }


  getMainMenues() {
    this.menuApi.getMainMenues(this.defaultCountryId)
      .then(res => {
        for (let i = 0; i < res.length; i++) {
            this.items.push({
              label: res[i].dataDTO.wiseName,
              items: this.getSubMenues(res[i].dataDTO.id)
            });
        }
        this.isMenuLoaded = true;
      }).catch(err => {
        console.log("err: ", err);
      })
  }

  getSubMenues(parentId: number):MenuItem[] {
    let items: MenuItem[] = [];
    this.menuApi.getSubMenues(parentId, this.defaultCountryId)
      .then(res => {
        if (res[0].statusCode!= 404) {
          for (let i = 0; i < this.menuList.length; i++) {

            let found = false;

            for (let j = 0; j < res.length; j++) {

              if (res[j].dataDTO.genericName === this.menuList[i]) {
                found = true;
                items.push({
                  routerLink: '/' + res[j].dataDTO.genericName,
                  label: res[j].dataDTO.wiseName,
                  routerLinkActiveOptions: { exact: true }
                });
                break;
              }

            }

            if (found === false) {
              items.push({
                routerLink: '/' + this.menuList[i],
                label: "Default " + this.menuList[i],
                routerLinkActiveOptions: { exact: true }
              });
            }
          }
        }

      }).catch(err => {
        console.log(err);
      })
    return items;
  }

}
