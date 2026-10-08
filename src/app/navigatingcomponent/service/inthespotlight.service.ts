import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InthespotlightService {
  private baseurl="";
        constructor(private http:HttpClient) { }
        onsubmit():Observable<InthespotlightService[]>{
          return this.http.get<InthespotlightService[]>(this.baseurl);
        }

}
