import { createElement } from "./tools/jsxFactory";
export class DatePicker {
    constructor() {
        this.handleSelectedDate = (ev) => {
            this.pickeddatum = String(ev.target.value);
        };
        this.handleSelectedPayment = (ev) => {
            this.pickedpayment = String(ev.target.value);
        };
        this.handleAskforDate = () => {
            this.props.callback(this.pickeddatum, this.pickedpayment);
        };
    }
    getContent() {
        return createElement("div", { className: "row" },
            createElement("div", { className: "col-md-4" },
                createElement("div", { className: "card m-4 p-4 bglight" },
                    createElement("select", { className: "form-control-inline float right m-1", onChange: this.handleSelectedDate }, this.props.dates.map(d => createElement("option", null,
                        " ",
                        d.datum))))),
            createElement("div", { className: "col-md-4" },
                createElement("div", { className: "card m-4 p-4 bglight" },
                    createElement("select", { className: "form-control-inline float right m-1", onChange: this.handleSelectedPayment }, this.props.payments.map(p => createElement("option", null,
                        " ",
                        p.name))))),
            createElement("button", { className: "btn btn-success m-4 p-4 btn-sm float-right", onClick: this.handleAskforDate }, "Get date"));
    }
}
