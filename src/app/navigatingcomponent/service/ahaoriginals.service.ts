import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ahaoriginals } from '../models/ahaoriginals';

@Injectable({
  providedIn: 'root'
})
export class AhaoriginalsService {
    private baseurl="assets/ahaoriginals.json";
      constructor(private http:HttpClient) { }
      onsubmit():Observable<Ahaoriginals[]>{
        return this.http.get<Ahaoriginals[]>(this.baseurl);
      }
}
