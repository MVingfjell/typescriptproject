import {abstractDataSource} from "./abstractDataSources";
import {PaymentProduct, dayface} from "./entities"
import Axios from "axios";
//import { localdatasource } from "./localDataSource";

//const protocol = "http";
//const hostname = "localhost";
//const port = 4600;

const urls = {
    dates: "/api/dates",
    products: "/api/products"
};
export class RemoteDataSources extends abstractDataSource {
    loadDates(): Promise<dayface[]> {
        return Axios.get(urls.dates).then(response => response.data)
    }
    loadPayments(): Promise<PaymentProduct[]> {
        return Axios.get(urls.products).then(response => response.data)
    }
}