import axios from "axios";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class KeyWordBaseApi {

  baseUrl: string = "http://localhost:9595/v1/key_word_base/keyword_base_server";


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


  async save(genericName: string, countryId: number, wiseName: string) {

    let accessToken = localStorage.getItem("accessToken");

    await axios.post(this.baseUrl,
      { genericName, countryId, wiseName },
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


  async update(id: number, genericName: string, countryId: number, wiseName: string) {

    let accessToken = localStorage.getItem("accessToken");

    await axios.put(this.baseUrl,
      { id, genericName, countryId, wiseName },
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

  async getKeywords() {
    let accessToken = localStorage.getItem("accessToken");

    try {
      const res = await axios.get(this.baseUrl+'/wise_name',
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
