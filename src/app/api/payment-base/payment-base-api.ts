import axios from "axios";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: "root"
})
export class PaymentBaseApi {

    baseUrl: string = "http://localhost:9595/v1/payment/payment_base";


    constructor() {
    }


    async saveAll(types: any) {
        let accessToken = localStorage.getItem("accessToken");
       

        console.log("types: ", types);
        await axios.post(this.baseUrl + '/save-all',types,
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
