import { EgpCountryApi } from 'src/app/api/egp-country/egp-country-api';
import axios from "axios";
import { Injectable } from "@angular/core";

export interface DataDTO {
  id: number;
  parentId: number;
  wiseName: string;
  genericName: string;
}

@Injectable({
  providedIn: "root"
})
export class MenuBaseApi {

  baseUrl: string = "http://localhost:9595/v1/menu";

  constructor() {
  }

  async getAll() {

    let accessToken = localStorage.getItem("accessToken");

    try {
      const res = await axios.get(this.baseUrl,
        {
          headers: { "Authorization": `Bearer ${accessToken}` }
        });
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  async getMainMenues(defaultCountryId:number) {

    let accessToken = localStorage.getItem("accessToken");


    try {
      const res = await axios.get(this.baseUrl + '/main_menu/' + defaultCountryId,
        {
          headers: { "Authorization": `Bearer ${accessToken}` }
        });
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }


  async getSubMenues(parentId: number,defaultCountryId:number) {

    let accessToken = localStorage.getItem("accessToken");

    try {
      const res = await axios.get(this.baseUrl + '/sub_menu/' + parentId + '/' + defaultCountryId,
        {
          headers: { "Authorization": `Bearer ${accessToken}` }
        });
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

}
