import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  baseUrl= "http://localhost:3000/api/"


  constructor( public _http: HttpClient) { }

  addEntry(data){
    console.log("this worked!")
    return this._http.post(`${this.baseUrl}documents`, data)
  }

  getTableData(){
    console.log("viewResults() fired")
    return this._http.get(`${this.baseUrl}documents`)
  }





}
