import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinematreatsService {
  private baseurl="";
    constructor(private http:HttpClient) { }
    onsubmit():Observable<CinematreatsService[]>{
      return this.http.get<CinematreatsService[]>(this.baseurl);
      }
}
