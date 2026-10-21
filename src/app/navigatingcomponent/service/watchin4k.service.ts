import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Watchin4k } from '../models/watchin4k';

@Injectable({
  providedIn: 'root'
})
export class Watchin4kService {
    private baseurl="";
    constructor(private http:HttpClient) { }
    onsubmit():Observable<Watchin4k[]>{
      return this.http.get<Watchin4k[]>(this.baseurl);
    }

}
