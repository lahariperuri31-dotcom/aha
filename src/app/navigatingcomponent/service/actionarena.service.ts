import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionarenaService {
   private baseurl="";
    constructor(private http:HttpClient) { }
    onsubmit():Observable<ActionarenaService[]>{
      return this.http.get<ActionarenaService[]>(this.baseurl);
    }
}
