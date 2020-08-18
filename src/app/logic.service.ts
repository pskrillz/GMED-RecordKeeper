import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment"
import { ApiService } from './api.service'



@Injectable({
  providedIn: 'root'
})
export class LogicService {
  baseUrl: string = environment.apiUrl

  // dynamic variable for storing results. 
  results = null;


  constructor(public _http : HttpClient, public _api : ApiService) { }


  // creating a 2 service architecture with one for api calls
  // and the ones here for the logic/subscribe functions. 

  viewUploads(){
    this._api.viewUploads().subscribe( 
      (res) => {
      this.results = res
      console.log(rest)


    })
  }









}
