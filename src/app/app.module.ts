import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';    //Added by me for using Data-binding
import {routing, appRoutingProviders} from './app.routing'; //Added by me for use Routing
import {CommonModule} from '@angular/common'; //Added by me for use ngIf
import {ConverterPipe} from './pipes/converter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http, JsonpModule} from '@angular/http';

import {FruitComponent} from './fruits/fruit.component';
import {EmployeeComponent} from './employees/employee.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contacts/contact.component';
import {PaymentComponent} from './payments/payment.component';
import {TemplatesComponent} from './templates/templates.component';
import {PetitionsServices} from './services/petition.service'; //Added by me for use Routing
import {ChildComponent} from './child/child.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    EmployeeComponent,
    HomeComponent,
    ContactComponent,
    ConverterPipe,
    PaymentComponent,
    TemplatesComponent,
    ChildComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    routing,
    HttpClientModule,
    HttpModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [appRoutingProviders, PetitionsServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
