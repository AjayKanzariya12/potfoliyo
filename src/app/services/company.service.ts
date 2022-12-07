import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }

    getdata(){
    return this.http.get<any>(`http://192.168.29.244:3000/Web`)
    .pipe(map((res :any)=>{
      return res;
    }))

  }
}
