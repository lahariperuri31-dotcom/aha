import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchforfreeService {
  private baseurl = "assets/watchforfree.json";
    constructor(private http:HttpClient) { }
    onsubmit():Observable<WatchforfreeService[]>{
        return this.http.get<WatchforfreeService[]>(this.baseurl);
      }
}
