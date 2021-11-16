import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'templates',
    templateUrl: './templates.component.html'
})

export class TemplatesComponent implements OnInit {
    public title:string;
    public admin:boolean;
    public data_external:string;
    public Identitys = {
        id: 1,
        web: 'Frank Testing',
        info: 'Web Develope'
    };

    constructor() {
        this.title = "Templates ngTemplate for Angular";
        this.admin = true;
        this.data_external = "Info of Data External from Templates Component";
     }

    ngOnInit() { }
    ChangeAdm(){
        this.admin  = !this.admin; 
    }

    GetDataInfo(event:any){
        console.log(event.InfoName);

    }
}