import { Component, OnInit } from '@angular/core';
import { TableViewComponent } from "../resourceLibrary/table-view/table-view.component"
import { TableDataService } from '../../table-data.service'

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
    
  }


}
