//import {localdatasource} from "./data/localDataSource"
import "bootstrap/dist/css/bootstrap.css";
//import {DomDisplay} from "./domDisplay";
import {HtmlDisplay} from "./htmlDisplay";
import {RemoteDataSources} from "./data/remoteDataSource"

/*
async function displaydata(): Promise<string> {
    let ds = new localdatasource();
    let allDates = await ds.getDatum();
    let result = "";

    allDates.forEach(p => result += `Datum ${p.datum}, veckodag ${p.veckodag}\n`)
    return result;
}

displaydata().then(res => console.log(res));
*/

let ds = new RemoteDataSources()

async function displayData() {
   let display = new HtmlDisplay();
    display.props = {
      //  paymentproducts: await ds.//
      //dates: await ds.getDatum()
        datasource: ds
    }
    return display.getContent();
}

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      displayData().then(elem => {
            let rootElement = document.getElementById("app");
            rootElement.innerHTML = "";
           rootElement.appendChild(elem);
        })
    }
}

   
//let adddatedata = datesdata.map(item => {
  //  return new dateline(
   //  item.id, item.datum, item.veckodag, item.arbetsfridag, item.röddag
 //) 
 // })
//console.log(adddatedata.forEach(item => item.getDatum()))



  //    console.log(datadatum);
      
  
   



   

