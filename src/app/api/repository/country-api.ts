import axios from "axios";
import { Injectable } from "@angular/core";



@Injectable({
  providedIn: "root"
})
export class ApiClient {


  baseUrl: string = "http://localhost:6060/api/v1/country";


  constructor(){

  }

  getAll(){
    return axios.get(this.baseUrl)
    .then(res=>{
      console.log(res);
      return res.data;
    }).catch(err=>{
      console.log(err);
    })
  }

}
