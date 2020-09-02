import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class TableDataService {

  baseUrl= "http://localhost:3000/api/"


  constructor( public _http: HttpClient) { }

  addEntry(data){
    console.log("this worked!")
    return this._http.post(`${this.baseUrl}documentEntries`, data)
  }

  getTableData(){
    console.log("viewResults() fired")
    return this._http.get(`${this.baseUrl}documentEntries`)
  }

  updateCell(id, newValue){
    console.log("update cell worked")
    return this._http.patch(`${this.baseUrl}documentEntries/${id}`, newValue)
  }

  // each time i check a row, I will pass the ids into an array and that delete it one by one. 
  deleteRows(idArray){
    return this._http.delete(`${this.baseUrl}${idArray}`)

  }



}
