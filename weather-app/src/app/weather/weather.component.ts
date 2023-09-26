import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherData } from '../classes/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  location: string = '';
  weatherData: WeatherData[] = [];
  noDataFound: boolean = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {

    this.getAllWeather();
  }

  private getAllWeather() {
    this.weatherService.getAllWeather().subscribe(
      (data) => {
        this.weatherData = data;
        this.noDataFound = this.weatherData.length === 0;
      },
      (error) => {
        console.error('Error fetching weather data:', error);
        this.noDataFound = true; 
      }
    );
  }


  getWeatherIconUrl(weatherCondition: string): string {
    const weatherIcons: { [key: string]: string } = {
      sunny: 'sun.png',
      rainy: '123.jpg',
      cloudy: '123.jpg',

    };

    const basePath = 'assets/';

    const iconUrl = basePath + (weatherIcons[weatherCondition] || 'default.png');

    return iconUrl;
  }

  searchWeather(): void {
    this.weatherService.getWeather(this.location).subscribe(
      (data) => {
        this.weatherData = data;
        this.noDataFound = this.weatherData.length === 0;
      },
      (error) => {
        console.error('Error fetching weather data:', error);
        this.noDataFound = true; 
      }
    );
  }
}
