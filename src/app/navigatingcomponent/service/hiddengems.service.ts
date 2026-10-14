import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HiddengemsService {
       private baseurl="";
              constructor(private http:HttpClient) { }
              onsubmit():Observable<HiddengemsService[]>{
                return this.http.get<HiddengemsService[]>(this.baseurl);
              }
}
