import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export default class WeatherServiceService {

  private APIkey:string;
  public data: any;
  public cityName:string;

  constructor(private http: HttpClient) { 
    this.APIkey='f5775e414b766f2ce43c6b7cb834359a'
    this.cityName='London'
  }

  getWeatherJSON(cityName:string):any{
    
    this.http.get<any>(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${this.APIkey}`).subscribe(data=>{
      this.data = data
      console.log(data)
    })
    
    return this.data
  }
}
