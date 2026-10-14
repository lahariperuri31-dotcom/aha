import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
       private baseurl="";
        constructor(private http:HttpClient) { }
        onsubmit():Observable<GenreService[]>{
          return this.http.get<GenreService[]>(this.baseurl);
        }
}
