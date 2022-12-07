import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class UIService {
    constructor(private http: HttpClient) {}

    getdata() {
        return this.http.get<any>("http://192.168.29.244:3000/UI").pipe(
            map((res: any) => {
                return res;
            })
        );
    }

    getApp() {
      return this.http.get<any>("http://192.168.29.244:3000/App").pipe(
          map((res: any) => {
              return res;
          })
      );
  }

  getgraphic() {
    return this.http.get<any>("http://192.168.29.244:3000/graphic").pipe(
        map((res: any) => {
            return res;
        })
    );
}

getMarketing() {
  return this.http.get<any>("http://192.168.29.244:3000/Digital-marketing").pipe(
      map((res: any) => {
          return res;
      })
  );
}

getDevelopers() {
  return this.http.get<any>("http://192.168.29.244:3000/Developers").pipe(
      map((res: any) => {
          return res;
      })
  );
}

}
