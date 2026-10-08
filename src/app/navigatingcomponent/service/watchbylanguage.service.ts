import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchbylanguageService {
   private baseurl="";
    constructor(private http:HttpClient) { }
    onsubmit():Observable<WatchbylanguageService[]>{
      return this.http.get<WatchbylanguageService[]>(this.baseurl);
    }
}
