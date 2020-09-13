import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableDataService } from '../../../table-data.service'
import { resetFakeAsyncZone } from '@angular/core/testing';
import { ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';


@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit, AfterViewInit {
  // what is the green here?
  @ViewChild('agGrid') agGrid: AgGridAngular;

  //geters of row data
  rowData;
  basic = false;
  tableData: any = [];

  constructor(public _http: HttpClient, public _tableData: TableDataService) {}

  ngOnInit() {
   this.rowData = this._tableData.getTableData()
  }

  ngAfterViewInit(){
    this.agGrid.api.sizeColumnsToFit()
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
    dataColumns: null
  }



  columnDefs = [
      {headerName: 'Version', field: 'version',  editable: true, sortable: true, filter: true, checkboxSelection: true  },
      {headerName: 'Requested By', field: 'reqBy',  editable: true, sortable: true, filter: true},
      {headerName: 'Requested Date', field: 'reqDate',  editable: true, sortable: true, filter: true },
      {headerName: "Department", field: "dep",  editable: true, sortable: true, filter: true },
      {headerName: "Name", field: "name",  editable: true, sortable: true, filter: true } ,
      {headerName: "Reference No.", field: "refNum",  editable: true, sortable: true, filter: true },
      {headerName: "Subject", field: "subject",  editable: true, sortable: true, filter: true },
      {headerName: "User", field: "user",  editable: true, sortable: true, filter: true },
      {headerName: "Link", field: "link",  editable: true, sortable: true, filter: true },
      {headerName: "Period", field: "period",  editable: true, sortable: true, filter: true },
      {headerName: "Description", field: "description",  editable: true, sortable: true, filter: true },
      {headerName: "Last Update", field: "lastUpdate",  editable: true, sortable: true, filter: true },
      {headerName: "Expiration Date", field: "expDate",  editable: true, sortable: true, filter: true },
      {headerName: "Data Columns", field: "dataColumns",  editable: true, sortable: true, filter: true }
  ];



  refreshDataBase(){
    return this.rowData = this._tableData.getTableData()
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
      })
  }

  deleteRows(){
    const selectedRows = this.agGrid.api.getSelectedNodes();
    const rowIdArr = []
    for (let i = 0; i<selectedRows.length; i++){
      rowIdArr.push(selectedRows[i].data.id)
    }
    console.log(rowIdArr)

    for (let i = 0; i<selectedRows.length; i++){
      this._tableData.deleteRows(rowIdArr[i]).subscribe( 
        (res) => {console.log("this ran")
         this.refreshDataBase() })
      console.log("deleted!")
    }
  }



}

// //this.agGrid.api.getSelectedNodes()
// deleteRows(this.apiGrid.api.getSelectedNodes()
// do this in class...
