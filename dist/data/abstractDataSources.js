//import {datesdata} from "./localDataSource"
/*export var dater = ""
export function getdate (paymentrule: number, startdate: dayface, datesdata: dayface[]): void {
 var idofStartdate = datesdata.indexOf(startdate);
 var count = 0;
 for (var i = idofStartdate; i >= 0; i--) {
    if (datesdata[i].röddag === false && datesdata[i].arbetsfridag === false) {
       count += 1;
     }
    if (count === paymentrule) {break; }
     dater += datesdata[i-1].id + ","
   }
 }
 console.log(dater)
*/
//export type dateprop = keyof dayface;
export class abstractDataSource {
    constructor(
    //public  readonly id: number,
    //public datum: string,
    //public veckodag?: string,
    //public arbetsfridag?: boolean,
    //public röddag?: boolean,
    ) {
        this.dates = [];
        this.loading = this.getData();
        this.payments = [];
        //this.id = id,
        //this.datum = datum,
        //this.arbetsfridag = arbetsfridag,
        //this.röddag = röddag,
        //this.veckodag = veckodag
        //no statement required
    }
    async getDatum() {
        await this.loading;
        return this.selectdates();
    }
    async getPayments() {
        await this.loading;
        return this.selectpayments();
    }
    async getData() {
        this.dates = [];
        const rawDateData = await this.loadDates();
        rawDateData.forEach(d => {
            this.dates.push(d);
        });
        this.payments = [];
        const rawPaymentData = await this.loadPayments();
        rawPaymentData.forEach(p => {
            this.payments.push(p);
        });
    }
    selectdates() {
        return [...this.dates.values()];
    }
    selectpayments() {
        return [...this.payments.values()];
    }
}
