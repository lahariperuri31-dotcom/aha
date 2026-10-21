import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Watchinteluguandtamil } from '../models/watchinteluguandtamil';

@Injectable({
  providedIn: 'root'
})
export class WatchinteluguandtamilService {
   private baseurl="http://localhost:8081/api/v1/Watchinteluguandtamildata";
      constructor(private http:HttpClient) { }
      onsubmit():Observable<Watchinteluguandtamil[]>{
        return this.http.get<Watchinteluguandtamil[]>(this.baseurl);
      }
}
