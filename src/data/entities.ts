
export type PaymentProduct = {
    Productid: number;
    name: string;
    paymentrule: number;
}


export interface dayface 
    {
id: number;
datum: string;
veckodag?: string;
arbetsfridag?: boolean;
röddag?: boolean;

}


export class calculatorrule {
date: dayface[]
payment: PaymentProduct[]



}








