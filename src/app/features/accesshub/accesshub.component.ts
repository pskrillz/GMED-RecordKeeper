import { Component, OnInit } from '@angular/core';
import { TableDataService } from '../../table-data.service'

@Component({
  selector: 'app-accesshub',
  templateUrl: './accesshub.component.html',
  styleUrls: ['./accesshub.component.scss']
})
export class AccesshubComponent implements OnInit {

  constructor(public _tableData : TableDataService) { }

  ngOnInit(){
    this._tableData.loggedIn = true
  }

}
