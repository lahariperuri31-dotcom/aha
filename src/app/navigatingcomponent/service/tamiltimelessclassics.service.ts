import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TamiltimelessclassicsService {
  private baseurl="";
        constructor(private http:HttpClient) { }
        onsubmit():Observable<TamiltimelessclassicsService[]>{
          return this.http.get<TamiltimelessclassicsService[]>(this.baseurl);
        }
  }
