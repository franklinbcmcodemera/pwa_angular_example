import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-component',
    template: `
    <hr>
    <strong>This is the {{title}}</strong>
    <ul>
        <li>{{property_one}}</li>
        <li>{{property_two}}</li>
        <button (click)="sendInfo($event);" > Send </button>
    <ul>
    
    `
})

export class ChildComponent implements OnInit {
    public title:string;

    //asignar un valor desde afuera con un @Input()
    @Input() property_one:string;
    @Input('Text2') property_two:string;

    //asignar un valor desde adentro con un @Output() , debe ser de tipo EventEmitter 
    @Output() from_child = new EventEmitter();

    constructor() {
        this.title = "Child component";
     }

    ngOnInit() {
        console.log(this.property_two);
        
     }
     sendInfo(event:any){
        this.from_child.emit({InfoName: 'Frank Caamano'});
     }
}