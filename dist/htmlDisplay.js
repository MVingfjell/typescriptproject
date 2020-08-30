import { createElement } from "./tools/jsxFactory";
import { DatePicker } from "./datepicker";
var DisplayMode;
(function (DisplayMode) {
    DisplayMode[DisplayMode["Form"] = 0] = "Form";
    DisplayMode[DisplayMode["Complete"] = 1] = "Complete";
})(DisplayMode || (DisplayMode = {}));
export class HtmlDisplay {
    constructor() {
        this.containerElem = document.createElement("div");
        this.mode = DisplayMode.Form;
        this.calcDate = (datum, payment) => {
            console.log("hello");
            this.updateContent();
        };
        this.containerElem = document.createElement("div");
    }
    async getContent() {
        await this.updateContent();
        return this.containerElem;
    }
    async updateContent() {
        let dates = await this.props.datasource.getDatum();
        let payments = await this.props.datasource.getPayments();
        this.containerElem.innerHTML = "";
        let contentElem;
        switch (this.mode) {
            case DisplayMode.Form:
                contentElem = createElement("div", null,
                    createElement(DatePicker, { dates: dates, payments: payments, callback: this.calcDate }));
                break;
            case :
        }
        this.containerElem.appendChild(content);
        console.log();
    }
}
