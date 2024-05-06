import { Component } from '@angular/core';
import { StravaService } from '../services/strava.service';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrl: './bike.component.css'
})
export class BikeComponent {
  constructor(public stravaService: StravaService) {}
  ngOnInit(){
    this.stravaService.printHello();
  }
}
