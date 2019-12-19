import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getWeather(location){
      return this.http.get(
        'http://api.weatherstack.com/current?access_key=4814a5df430d1e8c3211575f2c00a46f&query=' + location
      );
  }
}


