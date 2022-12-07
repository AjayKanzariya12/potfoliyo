import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class DetailsService {
    constructor(private http: HttpClient) {}

    getdata(id: any) {
        return this.http.get<any>(`http://192.168.29.244:3000/posts/${id}`).pipe(
            map((res: any) => {
                return res;
            })
        );
    }
}
