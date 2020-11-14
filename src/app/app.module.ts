import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { TableDataService } from './table-data.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccesshubComponent } from './features/accesshub/accesshub.component';
import { NavbarheaderComponent } from './features/navbarheader/navbarheader.component';
import { TableViewComponent } from './features/resourceLibrary/table-view/table-view.component';

import { AgGridModule } from 'ag-grid-angular';
import { GridOptions } from "../../node_modules/ag-grid-community";
import { NewrecordComponent } from './features/newrecord/newrecord.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccesshubComponent,
    NavbarheaderComponent,
    TableViewComponent,
    NewrecordComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule, 
    HttpClientModule,
    
    AgGridModule.withComponents([])
  ],
  providers: [TableDataService, TableViewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
