import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableDataService } from '../../../table-data.service'

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
  Name: null,
  Owner: null,
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


addEntry(formData){
this._tableData.addEntry(formData).subscribe(
  (res) => {
  console.log("dataworked", "formData: " + formData, res)
  }
)
}




}
