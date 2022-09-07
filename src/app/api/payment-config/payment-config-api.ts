import axios from "axios";
import { Injectable } from "@angular/core";

export interface PaymentConfigDTO {
  id: number;
  procurementNatureName: string;
  procurementMethodName: string;
  payments: PaymentBaseDTO[];
}

export interface PaymentBaseDTO {
  id: number;
  paymentType: string;
  active: boolean;
  paymentConfigurationId: number;
}


export interface TypesDTO {
  paymentTypeId: number;
  active: boolean;
  paymentConfigurationId: number;
}

@Injectable({
  providedIn: "root"
})
export class PaymentConfigApi {

  baseUrl: string = "http://localhost:9595/v1/payment/payment_configuration";


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
