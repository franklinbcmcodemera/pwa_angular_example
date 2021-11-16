import  { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
 

@Component({
    selector: 'contact',
    templateUrl: 'contact.component.html'
})

export class ContactComponent implements OnInit {
    public ContactName:string = 'Franklin Contacto';
    public Phone:string = '809-555-4444'; 
    public title:string = "Contacto en la Web";
    public Contactparams:any;
 
    constructor(
        private _route: ActivatedRoute, 
        private _router: Router
        ){ }

    ngOnInit() { 
        this._route.params.forEach((params: Params) => {
            this.Contactparams =  params['ContactId'];
        })
    }

    Redirect(){
        this._router.navigate(["/contact","Prueba de Parametros"]);
       
    }
}