import {dayface, PaymentProduct} from "./entities"


export abstract class abstractDataSource  {
//private items: T[];
  private dates: dayface[]
 private payments: PaymentProduct[]
 public loading: Promise<void>;
 public datetopayArray: string[];
 public dateToPay: dayface["datum"];

  constructor () {
      this.dates = [];
      this.loading = this.getData();
      this.payments = [];
      this.datetopayArray = [];
      this.dateToPay = this.dateToPay;
    }

    async getDatum(): Promise<dayface[]> {
      await this.loading;
    return this.selectdates()
    }

    async getPayments(): Promise<PaymentProduct[]>{
      await this.loading;
      return this.selectpayments();
    }
  /*async getItem(): Promise<T[]> {
    await this.loading;
    return this.selectitems();
  }*/

    protected async getData(): Promise<void> {
      this.dates = []
      const rawDateData = await this.loadDates();
      rawDateData.forEach(d => {
      this.dates.push(d)
        })
      this.payments = []
      const rawPaymentData = await this.loadPayments();
      rawPaymentData.forEach(p => {
        this.payments.push(p)
        })
  

      }

    protected selectdates(): dayface[]{
      return [...this.dates.values()]
    }

    protected selectpayments(): PaymentProduct[]{
      return [...this.payments.values()]
    }

    /*protected selectitems(): T[]{
      return [...this.items.values()]
    }*/
    //protected abstract loadItems(): Promise<T[]>;
    protected abstract loadDates(): Promise<dayface[]>;
    protected abstract loadPayments(): Promise<PaymentProduct[]>;

    async calculator(selecteddate: string, selectedpayment:string, calculatorreturn: number):Promise<dayface['datum'] | string[]>{
     await this.loading;
     //console.log(selecteddate, selectedpayment)
    await this.selectdates();
     await this.selectpayments();
     let dates = await this.getDatum();
     let payees = await this.getPayments();
     let starteddate = dates.findIndex(obj => {
      return obj.datum === selecteddate
      })
      let getpaymentrule = payees.findIndex(p => {
      return p.name === selectedpayment;
      })
      let desiredPaymentRule = payees[getpaymentrule].paymentrule;
      let count = 0;
      
      for(var i = starteddate; i>= 0; i--) {
        if(dates[i].röddag === false && dates[i].arbetsfridag === false) { 
          count += 1;
        }
        if (count === desiredPaymentRule + 1) {break; }
   
     this.datetopayArray.push(dates[i].datum);
   }
   if(calculatorreturn = 1){
   this.dateToPay = this.datetopayArray[this.datetopayArray.length -1];
return this.dateToPay
   }
   if(calculatorreturn = 2){
return this.datetopayArray
   }
  } 
    
    }









 