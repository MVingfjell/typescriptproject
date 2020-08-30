import {createElement } from "./tools/jsxFactory";
import {abstractDataSource} from "./data/abstractDataSources";
import {dayface, PaymentProduct} from "./data/entities"

//export type dateprop = keyof dayface;
export class DatePicker { 
    
public pickeddatum: string
public pickedpayment: string

props: {
//datasource: abstractDataSource,
dates: dayface[],
payments: PaymentProduct[],
submitCallback: (date: string, payment: string) => void
//datasource: abstractDataSource;
}
getContent(): HTMLElement {
return<div className="row">
<div className="col-md-4">
<div className= "card m-4 p-4 bglight">
    <div className="form-group">
    <label for="selectdate">Select Payment</label>
<select className = "form-control-inline float right m-1" id="selectpayment" placeholder="" onchange={ this.handleSelectedPayment}>
    <option>Pick a payment type</option>
    {
this.props.payments.map(p =>
<option> {p.name}</option>
)
}
</select>
</div>
</div>
    
</div>


    <div className="col-md-4">
<div className= "card m-4 p-4 bglight">
<div className="form-group">
<label for="selectdate">Select Date</label>
<br/>
<select className = "form-control-inline float right m-1" id="selectdate" onchange={ this.handleSelectedDate}>
    <option>Pick a date</option>
    {
this.props.dates.map(d =>
<option> {d.datum}</option>
)
}
</select>
</div>
</div>
</div>


<button className="btn btn-success m-4 p-4 btn-lg float-right" 
onclick={this.handleDate}>
    Get date
</button>


</div>
}

handleSelectedDate = (ev: Event): void => {
    this.pickeddatum = String((ev.target as HTMLSelectElement).value)
}

handleSelectedPayment = (ev: Event): void => {
    this.pickedpayment = String((ev.target as HTMLSelectElement).value)
}

handleDate = (): void => {
    this.props.submitCallback(this.pickeddatum, this.pickedpayment);
    
}



}
