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
