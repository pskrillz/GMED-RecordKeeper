import { Component, OnInit } from '@angular/core';
import { TableDataService } from "../../table-data.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = {
    username: null,
    rememberMe: false,
    type: null,
    password: null, 



  }


  constructor( public _tableData: TableDataService) { }

  ngOnInit() {
    this._tableData.loggedIn = false
  }

}
