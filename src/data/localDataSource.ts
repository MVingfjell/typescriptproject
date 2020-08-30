import {PaymentProduct, dayface} from "./entities"
import { abstractDataSource } from "./abstractDataSources";


export class localdatasource extends abstractDataSource {
loadDates(): Promise<dayface[]> {
    return Promise.resolve([
        {
            id: 0,
           datum: "2020-05-11",
           veckodag: "Onsdag",
           arbetsfridag: false,
           röddag: true,
       },
        {
            id: 1,
           datum: "2020-05-12",
           veckodag: "Torsdag",
           arbetsfridag: false,
           röddag: false,
       },
        {
           id: 2,
           datum: "2020-05-13",
           veckodag: "Fredag",
           arbetsfridag: false,
           röddag: false,
       }, 
       {
        id: 3,
        datum: "2020-05-14",
        veckodag: "Lördag",
        arbetsfridag: true,
        röddag: false,
    },
    {
        id: 4,
        datum: "2020-05-15",
        veckodag: "söndag",
        arbetsfridag: true,
        röddag: true,
    }, 
    {
        id: 5,
        datum: "2020-05-16",
        veckodag: "måndag",
        arbetsfridag: false,
        röddag: false,
    },
    {
        id: 6,
        datum: "2020-05-17",
        veckodag: "tisdag",
        arbetsfridag: false,
        röddag: false,
    },
    {
        id: 7,
        datum: "2020-05-18",
        veckodag: "onsdag",
        arbetsfridag: false,
        röddag: false,
    }
    
    ]

)
}
loadPayments(): Promise<PaymentProduct[]>{
    return Promise.resolve([
        {
            Productid: 1,
            name: "Payee",
            paymentrule: 3,
        },
        {
            Productid: 2,
            name: "SuperPayee",
            paymentrule: 3,
        },
        {
            Productid: 3,
            name: "SuperinternationalPayee",
            paymentrule: 6,
        }
    ])
}
}







let monthData: object = {"cachetid":"2020-06-02 19:14:26","version":"2.1","uri":"\/dagar\/v2.1\/2015\/02","startdatum":"2015-02-01","slutdatum":"2015-02-28","dagar":
[{"datum":"2015-02-01","veckodag":"S\u00f6ndag","arbetsfri dag":"Ja","r\u00f6d dag":"Ja","vecka":"05","dag i vecka":"7","namnsdag":["Max","Maximilian"],"flaggdag":""},
{"datum":"2015-02-02","veckodag":"M\u00e5ndag","arbetsfri dag":"Nej","r\u00f6d dag":"Nej","vecka":"06","dag i vecka":"1","namnsdag":[],"flaggdag":""},
{"datum":"2015-02-03","veckodag":"Tisdag","arbetsfri dag":"Nej","r\u00f6d dag":"Nej","vecka":"06","dag i vecka":"2","namnsdag":["Disa","Hj\u00f6rdis"],"flaggdag":""},
{"datum":"2015-02-04","veckodag":"Onsdag","arbetsfri dag":"Nej","r\u00f6d dag":"Nej","vecka":"06","dag i vecka":"3","namnsdag":["Ansgar","Anselm"],"flaggdag":""},
{"datum":"2015-02-05","veckodag":"Torsdag","arbetsfri dag":"Nej","r\u00f6d dag":"Nej","vecka":"06","dag i vecka":"4","namnsdag":["Agata","Agda"],"flaggdag":""},
{"datum":"2015-02-06","veckodag":"Fredag","arbetsfri dag":"Nej","r\u00f6d dag":"Nej","vecka":"06","dag i vecka":"5","namnsdag":["Dorotea","Doris"],"flaggdag":""},
{"datum":"2015-02-07","veckodag":"L\u00f6rdag","arbetsfri dag":"Ja","r\u00f6d dag":"Nej","vecka":"06","dag i vecka":"6","namnsdag":["Rikard","Dick"],"flaggdag":""},
{"datum":"2015-02-08","veckodag":"S\u00f6ndag","arbetsfri dag":"Ja","r\u00f6d dag":"Ja","vecka":"06","dag i vecka":"7","namnsdag":["Berta","Bert"],"flaggdag":""},
{"datum":"2015-02-09","veckodag":"M\u00e5ndag","arbetsfri dag":"Nej","r\u00f6d dag":"Nej","vecka":"07","dag i vecka":"1","namnsdag":["Fanny","Franciska"],"flaggdag":""},
{"datum":"2015-02-10","veckodag":"Tisdag","arbetsfri dag":"Nej","r\u00f6d dag":"Nej","vecka":"07","dag i vecka":"2","namnsdag":["Iris"],"flaggdag":""},
{"datum":"2015-02-11","veckodag":"Onsdag","arbetsfri dag":"Nej","r\u00f6d dag":"Nej","vecka":"07","dag i vecka":"3","namnsdag":["Yngve","Inge"],"flaggdag":""},
{"datum":"2015-02-12","veckodag":"Torsdag","arbetsfri dag":"Nej","r\u00f6d dag":"Nej","vecka":"07","dag i vecka":"4","namnsdag":["Evelina","Evy"],"flaggdag":""},
{"datum":"2015-02-13","veckodag":"Fredag","arbetsfri dag":"Nej","r\u00f6d dag":"Nej","vecka":"07","dag i vecka":"5","namnsdag":["Agne","Ove"],"flaggdag":""},
{"datum":"2015-02-14","veckodag":"L\u00f6rdag","arbetsfri dag":"Ja","r\u00f6d dag":"Nej","vecka":"07","dag i vecka":"6","namnsdag":["Valentin"],"flaggdag":""},
{"datum":"2015-02-15","veckodag":"S\u00f6ndag","arbetsfri dag":"Ja","r\u00f6d dag":"Ja","vecka":"07","dag i vecka":"7","namnsdag":["Sigfrid"],"flaggdag":""},
{"datum":"2015-02-16","veckodag":"M\u00e5ndag","arbetsfri dag":"Nej","r\u00f6d dag":"Nej","vecka":"08","dag i vecka":"1","namnsdag":["Julia","Julius"],"flaggdag":""},
{"datum":"2015-02-17","veckodag":"Tisdag","arbetsfri dag":"Nej","r\u00f6d dag":"Nej","vecka":"08","dag i vecka":"2","namnsdag":["Alexandra","Sandra"],"flaggdag":""},
{"datum":"2015-02-18","veckodag":"Onsdag","arbetsfri dag":"Nej","r\u00f6d dag":"Nej","vecka":"08","dag i vecka":"3","namnsdag":["Frida","Fritiof"],"flaggdag":""},
{"datum":"2015-02-19","veckodag":"Torsdag","arbetsfri dag":"Nej","r\u00f6d dag":"Nej","vecka":"08","dag i vecka":"4","namnsdag":["Gabriella","Ella"],"flaggdag":""},
{"datum":"2015-02-20","veckodag":"Fredag","arbetsfri dag":"Nej","r\u00f6d dag":"Nej","vecka":"08","dag i vecka":"5","namnsdag":["Vivianne"],"flaggdag":""},
{"datum":"2015-02-21","veckodag":"L\u00f6rdag","arbetsfri dag":"Ja","r\u00f6d dag":"Nej","vecka":"08","dag i vecka":"6","namnsdag":["Hilding"],"flaggdag":""},
{"datum":"2015-02-22","veckodag":"S\u00f6ndag","arbetsfri dag":"Ja","r\u00f6d dag":"Ja","vecka":"08","dag i vecka":"7","namnsdag":["Pia"],"flaggdag":""},
{"datum":"2015-02-23","veckodag":"M\u00e5ndag","arbetsfri dag":"Nej","r\u00f6d dag":"Nej","vecka":"09","dag i vecka":"1","namnsdag":["Torsten","Torun"],"flaggdag":""},
{"datum":"2015-02-24","veckodag":"Tisdag","arbetsfri dag":"Nej","r\u00f6d dag":"Nej","vecka":"09","dag i vecka":"2","namnsdag":["Mattias","Mats"],"flaggdag":""},
{"datum":"2015-02-25","veckodag":"Onsdag","arbetsfri dag":"Nej","r\u00f6d dag":"Nej","vecka":"09","dag i vecka":"3","namnsdag":["Sigvard","Sivert"],"flaggdag":""},
{"datum":"2015-02-26","veckodag":"Torsdag","arbetsfri dag":"Nej","r\u00f6d dag":"Nej","vecka":"09","dag i vecka":"4","namnsdag":["Torgny","Torkel"],"flaggdag":""},
{"datum":"2015-02-27","veckodag":"Fredag","arbetsfri dag":"Nej","r\u00f6d dag":"Nej","vecka":"09","dag i vecka":"5","namnsdag":["Lage"],"flaggdag":""},
{"datum":"2015-02-28","veckodag":"L\u00f6rdag","arbetsfri dag":"Ja","r\u00f6d dag":"Nej","vecka":"09","dag i vecka":"6","namnsdag":["Maria"],"flaggdag":""}
]
}