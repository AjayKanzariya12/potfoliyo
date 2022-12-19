import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import * as db from './../../assets/db.json'

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }

    getdata(){
    return this.http.get<any>(`assets/db.json`)
    .pipe(map((res :any)=>{
      return res.Web;
    }))

  }
}
