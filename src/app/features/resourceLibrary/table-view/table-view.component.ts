import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableDataService } from '../../../table-data.service'
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  constructor(public _http: HttpClient, public _tableData: TableDataService) { }

  ngOnInit() {
   this.refreshDataBase()
    // this._tableData.getTableData().subscribe(
    //   (res) =>{
    //     console.log("getTableData() ran on init", res )
    //     this.tableData = res
    //   }
    // )
  }

formData= {
  reqBy: null,
  description: null,
}


tableData: any = [];

title = 'app';

columnDefs = [
    {headerName: 'Version', field: 'version' },
    {headerName: 'Requested By', field: 'reqBy' },
    {headerName: 'Requested Date', field: 'reqDate'},
    {headerName: "Department", field: "dep"},
    {headerName: "Name", field: "name"},
    {headerName: "Reference No.", field: "refNum"},
    {headerName: "Subject", field: "subject"},
    {headerName: "User", field: "user"},
    {headerName: "Link", field: "link"},
    {headerName: "Period", field: "period"},
    {headerName: "Description", field: "description"},
    {headerName: "Last Update", field: "lastUpdate"},
    {headerName: "Expiration Date", field: "expDate"},
];

//gets the data
rowData = this._tableData.getTableData()

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
  }
)
this.refreshDataBase()
// update ag grid rowdata
this.rowData = this._tableData.getTableData()
}




}
