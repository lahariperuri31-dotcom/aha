import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeartbeatstoriesService {
     private baseurl="";
            constructor(private http:HttpClient) { }
            onsubmit():Observable<HeartbeatstoriesService[]>{
              return this.http.get<HeartbeatstoriesService[]>(this.baseurl);
            }

}
