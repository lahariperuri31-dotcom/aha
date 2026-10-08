import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComedytimeService {
   private baseurl="";
            constructor(private http:HttpClient) { }
            onsubmit():Observable<HandpickedforyouService[]>{
              return this.http.get<HandpickedforyouService[]>(this.baseurl);
            }
}
