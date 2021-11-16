import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';    //Modulos de HTTP
import { map } from 'rxjs/operators';   //Libreria para mapear la respuesta de http
import { Observable } from 'rxjs/Observable'; //Observable para utilizar el rxjs las respuestas, observarlas y trabajar con ellas 

//NOTA: con este servicio se esta consumiento un servicio Api Rest
@Injectable()
export class PetitionsServices{
    public url:string;

    constructor(private _http:Http){
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }
    
    getText(){
        return 'Hello World!';
    }
    getArticle()
    {
       return this._http.get(this.url)
                        .pipe(map(res =>res.json()));   //Consumiendo Web services

    }
}