import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import WeatherService from '../../services/weather/weather-service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public weatherSearchForm : FormGroup = this.formBuilder.group({
    location: ['']
  });
  public location:string= '';
  @Output() public data = new EventEmitter<any>() ;

  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }
  getData(data:any): void{
    console.log(data.location)
    console.log(this.weatherService.getWeatherJSON(data.location))
    
    this.data.emit(this.weatherService.getWeatherJSON(data.location))
  }
}
