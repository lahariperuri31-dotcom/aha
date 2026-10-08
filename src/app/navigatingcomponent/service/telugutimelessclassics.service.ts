import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelugutimelessclassicsService {
   private baseurl="";
          constructor(private http:HttpClient) { }
          onsubmit():Observable<TelugutimelessclassicsService[]>{
            return this.http.get<TelugutimelessclassicsService[]>(this.baseurl);
          }
}
