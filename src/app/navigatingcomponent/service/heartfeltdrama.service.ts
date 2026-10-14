import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeartfeltdramaService {
     private baseurl="";
            constructor(private http:HttpClient) { }
            onsubmit():Observable<HeartfeltdramaService[]>{
              return this.http.get<HeartfeltdramaService[]>(this.baseurl);
            }
}
