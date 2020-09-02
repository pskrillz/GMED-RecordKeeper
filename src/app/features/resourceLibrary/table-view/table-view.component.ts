import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableDataService } from '../../../table-data.service'
import { resetFakeAsyncZone } from '@angular/core/testing';
import { ViewChild } from '@angular/core';
import {GridOptions} from "../../../../../node_modules/ag-grid-community";


@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  // ask if this a proper way to access a dom element
  @ViewChild('agGrid') agGrid: Element; 

  //geters of row data
  rowData;
  tableData: any = [];
  gridOptions;


  constructor(public _http: HttpClient, public _tableData: TableDataService) {
    this.gridOptions = <GridOptions>{
      onGridReady: () => {
        this.gridOptions.api.sizeColumnsToFit();
    },
      context: {
          componentParent: this
      }
  };
    this.gridOptions.rowData = this.rowData;
    this.gridOptions.columnDefs = this.columnDefs;
  }

  ngOnInit() {
   this.refreshDataBase()
   this.rowData = this._tableData.getTableData()
    this.gridOptions.api.sizeColumnsToFit()
    // why isnt this working?
  }

formData= {
  version: null, 
  reqBy: null,
  reqDate: null, 
  dep: null, 
  description: null,
  name: null, 
  refNum: null, 
  subject: null, 
  user: null, 
  link: null, 
  period: null, 
  lastUpdate: null, 
  expDate: null,

}

// refresh get (from onInit) the rowData for ag-grid
//grid options for the grid object



title = 'app';

columnDefs = [
    {headerName: 'Version', field: 'version',  editable: true },
    {headerName: 'Requested By', field: 'reqBy',  editable: true },
    {headerName: 'Requested Date', field: 'reqDate',  editable: true},
    {headerName: "Department", field: "dep",  editable: true},
    {headerName: "Name", field: "name",  editable: true}, ,
    {headerName: "Reference No.", field: "refNum",  editable: true},
    {headerName: "Subject", field: "subject",  editable: true},
    {headerName: "User", field: "user",  editable: true},
    {headerName: "Link", field: "link",  editable: true},
    {headerName: "Period", field: "period",  editable: true},
    {headerName: "Description", field: "description",  editable: true},
    {headerName: "Last Update", field: "lastUpdate",  editable: true},
    {headerName: "Expiration Date", field: "expDate",  editable: true},
];



// gridOptions= {
//   rowData: this.rowData, 
//   columnDefs: this.columnDefs, 

// }

refreshDataBase(){
  this._tableData.getTableData().subscribe(
    (res) => {
      console.log("refreshDataBase worked", res)
      this.tableData = res
      
    }
  )
}

addEntry(formData){
  this._tableData.addEntry(formData).subscribe(
  (res) => {
  console.log("dataworked", "formData: " + formData, res)
 })
  this.refreshDataBase()
// update ag grid rowdata
  this.rowData = this._tableData.getTableData()
}

cellValueChanged(event){
  console.log("cellvaluechanged")
  console.log(event.data)
  console.log(Object.entries(event))
  let eventColumn = event.colDef.field
  console.log({ [eventColumn]: event.newValue } )
  this._tableData.updateCell(event.data.id, { [eventColumn]: event.newValue }).subscribe(
    res => {
      console.log(res, 'worked')
    }
  )
  // console.log(event.data.id, event.newValue)
}



}





// [
//     { make: 'Toyota', model: 'Celica', price: 35000 },
//     { make: 'Ford', model: 'Mondeo', price: 32000 },
//     { make: 'Porsche', model: 'Boxter', price: 72000 }
// ];
// users = [
//   {
//   id:"1",
//   name:"paul", 
//   date:"1/14/20",
//   color:"blue",
// }
// ]