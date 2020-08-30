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
    this._tableData.getTableData().subscribe(
      (res) =>{
        console.log("getTableData() ran on init", res )
        this.tableData = res
      }
    )
  }

formData= {
  reqBy: null,
  description: null,
}


tableData: any = [];

title = 'app';

columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];
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
}




}
