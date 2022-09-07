import axios from "axios";
import { Injectable } from "@angular/core";
import { PaymentBaseApi } from "../payment-base/payment-base-api";

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


  constructor(private paymentBaseApi: PaymentBaseApi) {
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

  async save(procurementNatureId: number, procurementMethodId: number, types: any) {
    let accessToken = localStorage.getItem("accessToken");
    console.log(procurementNatureId, procurementMethodId, types);

    await axios.post(this.baseUrl,
      { procurementNatureId, procurementMethodId, types },
      {
        headers: { "Authorization": `Bearer ${accessToken}` },
      })
      .then(res => {
        console.log(res);
        for (let i = 0; i < types.length; i++) {
          types[i].paymentConfigurationId = res.data.id;
        }
        this.paymentBaseApi.saveAll(types)
          .then(response => {
            console.log(response);
          }).catch(error => {
            console.log(error);
          });
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
