import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from './classes/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'http://localhost:9090/api/v1/weather/search';
  private getAllURL = 'http://localhost:9090/api/v1/weather/getall';

  constructor(private http: HttpClient) {}

  getWeather(location: string): Observable<WeatherData[]> {
    return this.http.get<WeatherData[]>(`${this.apiUrl}?location=${location}`);
  }

getAllWeather(): Observable<WeatherData[]>{
  return this.http.get<WeatherData[]>(this.getAllURL);
}

}

