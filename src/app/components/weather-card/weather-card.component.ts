import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css','./info.scss'],
})
export class WeatherCardComponent implements OnInit {
  data = <any>{}
  imgUrl:string = ''

  currentTemperature: number = 0 
  feelsLikeTemperature: number = 0


  constructor() {
  }

  ngOnInit(): void {
  }

  getData(data:any){
    this.data = data;
    console.log(data)
    this.imgUrl = "http://openweathermap.org/img/wn/"+ data.list[0].weather[0].icon + '@2x.png';
    this.currentTemperature = Math.round(data.list[0].main?.temp - 273.15 )
    this.feelsLikeTemperature = Math.round(data.list[0].main?.feels_like - 273.15 )
  }
  resultFound() {
    return Object.keys(this.data).length > 0;
  }
}
