import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmotionalanddramaService {
   private baseurl="";
    constructor(private http:HttpClient) { }
    onsubmit():Observable<EmotionalanddramaService[]>{
      return this.http.get<EmotionalanddramaService[]>(this.baseurl);
    }
}
