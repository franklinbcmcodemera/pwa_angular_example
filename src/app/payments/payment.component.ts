import { Component, OnInit } from '@angular/core';
import {Payment} from './payment';
import {PetitionsServices} from '../services/petition.service';

@Component({
    selector: 'payment',
    templateUrl: './payment.component.html'
})

export class PaymentComponent implements OnInit {
    public _payment:Payment;
    public _payments: Array<Payment>;
    public _Article:any;


    constructor(private _petitionServices: PetitionsServices) {
        this._payment = new Payment("",1,"");
        this._payments = [
            new Payment("Kia Sorento",2,"Green"),
            new Payment("Toyota Viz",1,"Gray"),
            new Payment("Honda Civic",3,"Red"),
            new Payment("Hyunday",2,"Black"),
        ]
     }

    ngOnInit() {
        console.log(this._petitionServices.getText());
        console.log(this._petitionServices.getArticle().subscribe(
            result =>{
                this._Article = result;
                
                if(!this._Article)
                    console.log(result);
            },
            error =>{
               var errorMessage = <any>error;
               console.log(error);
            }

        ));
     }

    onSubmit(){
        console.log(this._payment);
        this._payments.push(this._payment);
        
        this._payment = new Payment("",1,"");
    }
}