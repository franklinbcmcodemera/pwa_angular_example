export class Employee{
    public Name:string;
    public Age:number;
    public Details:Array<any>;
    public Title:string;
    public DriverLicence:boolean;
    
    
    constructor(name, age,details,title,driverLicence){
        this.Name = name;
        this.Age = age;
        this.Details = details;
        this.Title = title;
        this.DriverLicence = driverLicence; 
    }
 
    
    }