import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StravaService {
  constructor() { }
  printHello(){
    console.log('hello');
  }
}
