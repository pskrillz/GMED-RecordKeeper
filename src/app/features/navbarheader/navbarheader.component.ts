import { Component, OnInit } from '@angular/core';
import { TableDataService } from '../../table-data.service'

@Component({
  selector: 'app-navbarheader',
  templateUrl: './navbarheader.component.html',
  styleUrls: ['./navbarheader.component.scss']
})
export class NavbarheaderComponent implements OnInit {

  constructor(public _tableData : TableDataService) { }

  ngOnInit(): void {
  }

}
