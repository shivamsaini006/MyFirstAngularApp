import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FirstComponent } from "./firstcomp";
import { AppComponent } from './app.component';
import { LuckynumberComponent } from './luckynumber/luckynumber.component';
import { ClickComponent } from './click/click.component';
import { HelloName } from "./helloname";
import { FormsModule } from "@angular/forms";
import { PrintnameComponent } from "./printname/printname.component";
import { DirectivecompComponent } from "./directivecomp/directivecomp.component";
import { EmployeeComponent } from './employee/employee.component';
import {  } from "./employee/employee.component";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LuckynumberComponent,
    ClickComponent,
    HelloName,
    PrintnameComponent,
    DirectivecompComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
  //bootstrap: [FirstComponent]
  //bootstrap: [LuckynumberComponent] 
  //bootstrap:[ClickComponent]
  //bootstrap:[HelloName]
  //bootstrap:[PrintnameComponent]
  //bootstrap:[DirectivecompComponent]
  bootstrap:[EmployeeComponent]
})
export class AppModule { }
