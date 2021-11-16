import {Injectable} from '@angular/core';


@Injectable()
export class ClothesService{
public ItemName = 'Blue Jeans';
public Collection_clothes:Array<any> = ['Jeans', 'Polo','T-shirt', 'Underwear','Shift','Cab'];

GetGuiId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

Testing(){

    return this.ItemName + ' ==>' + this.GetGuiId();

}
AddClothes(item:any):Array<any>{
    this.Collection_clothes.push(item);
    return this.GetClothes();
}
DeleteItem(idx:number){
    this.Collection_clothes.splice(idx, 1);
    return this.GetClothes();
}

GetClothes():Array<any>{
  return  this.Collection_clothes;
}

}