import  { Component, OnInit } from '@angular/core';
import {GlobalVariables} from '../globalvariables';

import {ClothesService} from '../services/clothes.service'; //trabajando con un Servicio

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers:[ClothesService]  //trabajando con un Servicio
})

export class HomeComponent implements OnInit {
    public title:string = "Pagina Principal";
    public _Gs:GlobalVariables = new GlobalVariables();
    public ListClothes:Array<string>;
    public StoredClothe:string;
    public RemoveClothe:string;
    public CurDate:any;

    constructor( private _clothesService: ClothesService) {
        this.CurDate = new Date(2020,4,16);
     }

    ngOnInit() { 
        this.ListClothes = this._clothesService.GetClothes();
        
    }

    AddStored(){
        this._clothesService.AddClothes(this.StoredClothe);
        this.StoredClothe = this._Gs.GsEmpty;
    }
    RemoveItem(idx:number){
         this._clothesService.DeleteItem(idx);

    }
}
 