import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApiWeather: string
  urlApiCrakend: string



  constructor(private http: HttpClient) {
    // this.urlApiWeather = environment.urlApiWeather
    this.urlApiCrakend = environment.urlApiCrakend

   }


   getWeather() {
     return this.http.get<any>(this.urlApiCrakend)
}

}
