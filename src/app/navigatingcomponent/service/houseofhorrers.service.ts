import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Houseofhorrers } from '../models/houseofhorrers';

@Injectable({
  providedIn: 'root'
})
export class HouseofhorrersService {
    private baseurl="";
      constructor(private http:HttpClient) { }
      onsubmit():Observable<Houseofhorrers[]>{
        return this.http.get<Houseofhorrers[]>(this.baseurl);
    }
}
