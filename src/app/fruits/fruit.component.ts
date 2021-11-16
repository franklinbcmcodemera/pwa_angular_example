import { Component } from '@angular/core';

@Component({
    selector: 'fruit',
    templateUrl: './fruit.component.html'
})


export class FruitComponent  {
    public ComponentName = 'Componente de frutas';
    public Listfruit = 'Pera, Guanabana, chinola, tamarindo, Mango,Melocoton';
    public fruitPunch = [ 'Mango','Chinola','Fresa','China','Mandarina','Melocoton' ];

  
}