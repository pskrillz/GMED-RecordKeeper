import { Component, OnInit } from '@angular/core';
import { TableViewComponent } from "../resourceLibrary/table-view/table-view.component"
import { TableDataService } from '../../table-data.service'
import

@Component({
  selector: 'app-newrecord',
  templateUrl: './newrecord.component.html',
  styleUrls: ['./newrecord.component.scss']
})
export class NewrecordComponent implements OnInit {
  modal = false;
  columns;


  constructor(public _tableData : TableDataService, public _tableView : TableViewComponent) { }

  ngOnInit(): void {
  }


  clearForms(){
    this._tableView.formData.version = "";
    this._tableView.formData.reqBy = "";
    this._tableView.formData.reqDate = "";
    this._tableView.formData.dep = "";
    this._tableView.formData.name = "";
    this._tableView.formData.subject = "";
    this._tableView.formData.description = "";
  }


}
