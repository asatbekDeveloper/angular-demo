import axios from "axios";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root"
})
export class FinancialYearApi {

  baseUrl: string = "http://localhost:9595/v1/financial_year";


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


  async save(year: string, isDefault: boolean) {

    let accessToken = localStorage.getItem("accessToken");

    await axios.post(this.baseUrl,
      { year: year, default: isDefault },
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


  async update(id: number, year: string, isDefault: boolean) {

    let accessToken = localStorage.getItem("accessToken");

    await axios.put(this.baseUrl,
      { id: id, year: year, default: isDefault },
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



}
