import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comedytime } from '../models/comedytime';

@Injectable({
  providedIn: 'root'
})
export class ComedytimeService {
   private baseurl="";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Comedytime[]>{
      return this.http.get<Comedytime[]>(this.baseurl);
    }
}
