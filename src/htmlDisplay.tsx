import { dayface } from "./data/entities"
import { createElement } from "./tools/jsxFactory";
import { DatePicker } from "./datepicker"
import { abstractDataSource } from "./data/abstractDataSources"
import {Summary} from "./complete"

enum DisplayMode {
    Form, Complete
}
export class HtmlDisplay {
    private containerElem = document.createElement("div");
    private mode: DisplayMode = DisplayMode.Form
    private dates: dayface[];
    private datetopay: string;

    
    constructor() {
        this.containerElem = document.createElement("div");

    }


    props: {
        //paymentproducts: PaymentProduct [];
        datasource: abstractDataSource;
    }

    async getContent(): Promise <HTMLElement> {
        await this.updateContent();
        return this.containerElem;

    }
   
    async updateContent(){ 
        let dates = await this.props.datasource.getDatum();
        let payments = await this.props.datasource.getPayments();
        //let datetopay = this.props.datasource.dateToPay;

        //console.log(datetopay)
        this.containerElem.innerHTML = "";
        let contentElem: HTMLElement;
        switch (this.mode) {
            case DisplayMode.Form:
                contentElem = <div>
                <DatePicker dates={dates} payments={payments} submitCallback={this.calcDate}/>
                </div>;
                break;
            case DisplayMode.Complete: 
            contentElem = <div>
                <Summary paymentDate={this.datetopay} />
            </div>
            break;
        } 
        
         
            
        this.containerElem.appendChild(contentElem);
      
    }
  
    /*calcDate = (date: string, payment: string)=> {
        this.props.datasource.calculator(date, payment)
            console.log(this.props.datasource.datetopayArray)
            console.log(this.props.datasource.dateToPay)
        this.props.datasource.dateToPay
        this.mode = DisplayMode.Complete;
        this.updateContent();
        */
    
         calcDate = (date: string, payment: string)=>{      
           this.props.datasource.calculator(date, payment).then(value => {
             this.datetopay = value   
             this.mode = DisplayMode.Complete;
             this.updateContent();
      
           });
       
            
        };
   
}