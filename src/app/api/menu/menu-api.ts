import axios from "axios";
import { Injectable } from "@angular/core";

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



}
