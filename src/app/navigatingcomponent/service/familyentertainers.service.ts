import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamilyentertainersService {
     private baseurl="";
      constructor(private http:HttpClient) { }
      onsubmit():Observable<FamilyentertainersService[]>{
        return this.http.get<FamilyentertainersService[]>(this.baseurl);
      }
}
