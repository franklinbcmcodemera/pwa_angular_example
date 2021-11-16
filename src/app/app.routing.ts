import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//import Components

import {EmployeeComponent} from './employees/employee.component';
import {FruitComponent} from './fruits/fruit.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contacts/contact.component';
import {PaymentComponent} from './payments/payment.component';
import {TemplatesComponent} from './templates/templates.component';

const appRoutes: Routes = [
    {path:'', component: HomeComponent},// Default cuando la url no tenga ruta definida
    {path:'home',component: HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'contact/:ContactId',component:ContactComponent}, // Para que pueda recibir parametros en Contact por la URL
    {path:'employee', component: EmployeeComponent},
    {path:'fruit', component: FruitComponent},
    {path:'payment',component: PaymentComponent},
    {path:'templates', component:TemplatesComponent},

    //NOTA: la ruta '**' debe ponerse de ultima, de lo contrario las demas que se pongan posterior a esta no funcionaran.
    {path:'**', component: HomeComponent} // '**' ==> cuando Falle la pagina o produzca un 404 que cargue la ruta que yo quiera
    

];

export const   appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);