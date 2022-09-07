import axios from "axios";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root"
})
export class CountryApi {

  baseUrl: string = "http://localhost:9595/v1/key_word_base/country_base_server";

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

  async getByName(name:string) {

    let accessToken = localStorage.getItem("accessToken");

    try {
      const res = await axios.get(this.baseUrl+'/name/'+name,
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
