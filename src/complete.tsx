import {createElement} from "./tools/jsxFactory"
import {abstractDataSource} from "./data/abstractDataSources"
import { dayface } from "./data/entities"
 

export class Summary {

    
    props: {
       // callback: () => void
      paymentDate: string;
    
    }

   
     
     getContent(): Promise<HTMLElement> {

        return <div className="m-2 text-center">
            <div className="jumbotron">
            <h2>Make the payment at the lastest the following date:</h2><br/>
            { 
                <h3>{this.props.paymentDate}</h3>
            }
         
            
        
          
        
            </div>
        </div>
    
    }
  
   

    
}
          


