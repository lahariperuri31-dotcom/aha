import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingnowService {
  private baseurl="";
      constructor(private http:HttpClient) { }
      onsubmit():Observable<TrendingnowService[]>{
        return this.http.get<TrendingnowService[]>(this.baseurl);
      }
}
