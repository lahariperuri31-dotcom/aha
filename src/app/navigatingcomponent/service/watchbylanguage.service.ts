import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Watchbylanguage } from '../models/watchbylanguage';

@Injectable({
  providedIn: 'root'
})
export class WatchbylanguageService {
   private baseurl="";
    constructor(private http:HttpClient) { }
    onsubmit():Observable<Watchbylanguage[]>{
      return this.http.get<Watchbylanguage[]>(this.baseurl);
    }
}
