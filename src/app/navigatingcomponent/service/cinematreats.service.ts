import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cinematreats } from '../models/cinematreats';

@Injectable({
  providedIn: 'root'
})
export class CinematreatsService {
  private baseurl="";
    constructor(private http:HttpClient) { }
    onsubmit():Observable<Cinematreats[]>{
      return this.http.get<Cinematreats[]>(this.baseurl);
      }
}
