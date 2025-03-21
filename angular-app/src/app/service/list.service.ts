import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost/api/getlist';
  private newRouteUrl = 'http://localhost/api/newroute';

  constructor(private http: HttpClient) { }

  getList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getNewRouteMessage(): Observable<any> {
    return this.http.get<any>(this.newRouteUrl);
  }
}
