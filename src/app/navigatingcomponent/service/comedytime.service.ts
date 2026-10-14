import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComedytimeService {
   private baseurl="";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<ComedytimeService[]>{
      return this.http.get<ComedytimeService[]>(this.baseurl);
    }
}
