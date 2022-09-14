import axios from "axios";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root"
})
export class EgpCountryApi {

  baseUrl: string = "http://localhost:9595/v1/key_word_base/egp_country_server";


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

  async get(id: number) {

    let accessToken = localStorage.getItem("accessToken");

    try {
      const res = await axios.get(this.baseUrl + '/' + id,
        {
          headers: { "Authorization": `Bearer ${accessToken}` }
        });
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
    }

  }


  async save(countryId: number, isDefault: boolean) {

    let accessToken = localStorage.getItem("accessToken");

    await axios.post(this.baseUrl,
      { countryId: countryId, default: isDefault },
      {
        headers: { "Authorization": `Bearer ${accessToken}` },
      })
      .then(res => {
        console.log(res);
        return res.data;
      }).catch(err => {
        console.log(err);
      }
      );
  }


  async update(id: number, countryId: number, isDefault: boolean) {

    let accessToken = localStorage.getItem("accessToken");

    await axios.put(this.baseUrl,
      { id: id, countryId: countryId, default: isDefault },
      {
        headers: { "Authorization": `Bearer ${accessToken}` },
      })
      .then(res => {
        console.log(res);
        return res.data;
      }).catch(err => {
        console.log(err);
      }
      );
  }


  async delete(id: number) {

    let accessToken = localStorage.getItem("accessToken");

    await axios.delete(this.baseUrl + '/' + id,
      {
        headers: { "Authorization": `Bearer ${accessToken}` },
      })
      .then(res => {
        console.log(res);
        return res.data;
      }).catch(err => {
        console.log(err);
      }
      );
  }


  async getDefaultCountryId() {
    let accessToken = localStorage.getItem("accessToken");

    return axios.get(this.baseUrl + '/default_country_id',
      {
        headers: { "Authorization": `Bearer ${accessToken}` },
      })
      .then(res => {
        return res.data;
      }).catch(err => {
        console.log(err);
      }
      );
  }


}
