import  { Component, OnInit } from '@angular/core';
import {Employee} from './Employee';   //Employee es el nombre de la clase a importar que esta en el mismo fichero
import {GlobalVariables} from '../globalvariables';

//decorador ==> @Component
@Component({
    selector: 'employee',
    templateUrl: './employee.component.html'
})

//clase a exportar
export class EmployeeComponent implements OnInit  {
    public _employee:Employee;
    public _employeeArr:Array<Employee>;
    public ObjtArrEmp:Array<any> = ['Nombre','Apellido','Telefono',3256,'Direccion','Referencias'];
    public _Gs:GlobalVariables = new GlobalVariables();
    public DefaultValue:boolean;
    public CustColor:string;
    
    constructor(){ // el constructor es lo primero que se lanza
        this._employeeArr = [
                    new Employee("Clase Empleado",23,this.ObjtArrEmp,'Clase de Empleados', this._Gs.GsYes),
                    new Employee("Prueba2",44,this.ObjtArrEmp,'Mi Prueba', this._Gs.GsYes),
                    new Employee("Prueba3",this._Gs.GsZero,this.ObjtArrEmp,'Mi Prueba4', this._Gs.GsNo)
                    
        ]
        this.CustColor = 'green';
    }
    //el ngOnInit se lanza de segundo, luego de que el constructor se lanza
    ngOnInit(){ //Agregar los metodos dentro del constructor es mala practiva, recomendable usarlo en ngOnInit

        var ObjtArr:Array<any> = ['Nombre','Apellido','Telefono',3256,'Direccion','Referencias'];
        this._employee = new Employee("Franklin Developer",23,ObjtArr,'Clase de Empleados', this._Gs.GsYes);
        this.DefaultValue = true;

        console.log(this._employee);
        console.log(this._employeeArr);
    
        //this.holaMundo("test");
        // diferencia entre var y let	
        // Variables y alcances:
        // variable "var" es global
        // variable "let" es interna en un bloque, a nivel de bloques, fuera de este bloque no actua
        var uno = 8;
        var dos = 13;
        if(uno === 8)
        {
            let uno = 3;
            var dos=89;
            console.log("dentro del IF" +uno);
        }
        console.log("fuera del IF" +uno);

        
    }

    holaMundo(_text:any){ //Funcion o Metodo ==> holaMundo
        alert("Hola Mundo ==> " + _text);
    }
   
    DisplayChanges(Istrue:boolean){
        this.DefaultValue = Istrue;
    }
    ChangeColor(){
        if(this.CustColor ==='red')
            this.CustColor = 'green';
        else
            this.CustColor = 'red';

    }
    ChangeTextColor(_text:string){
        alert(_text);
            this.CustColor = _text;
    }

} 

 