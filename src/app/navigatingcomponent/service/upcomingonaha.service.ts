import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpcomingonahaService {
  private baseurl="";
        constructor(private http:HttpClient) { }
        onsubmit():Observable<UpcomingonahaService[]>{
          return this.http.get<UpcomingonahaService[]>(this.baseurl);
        }
}
