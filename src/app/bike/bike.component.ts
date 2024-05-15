import { Component } from '@angular/core';
import { StravaService } from '../services/strava.service';
import { Brag } from '../interfaces/brag';
import { db } from '../../environments/environment';
import { doc, setDoc, getDoc, addDoc, collection, updateDoc, getDocs, limit, query, where, and, or } from 'firebase/firestore';
import { BragDay } from '../interfaces/bragday';
import { Timestamp } from "firebase/firestore";


@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrl: './bike.component.css'
})
export class BikeComponent {
  ngOnInit(){
    this.getBrags();
  }
  brags = new Array<Brag>();
  async getBrags(){
    const brags = await getDocs(query(collection(db, 'brag')));
    brags.forEach((brag) => {
      let days = new Array<BragDay>();
      for (let i = 0; i < 8; i++){
        let timestamp = new Timestamp(brag.data()['day'+i]['date']['seconds'], brag.data()['day'+i]['date']['nanoseconds'])
        let newDay: BragDay = {
          date: timestamp.toDate(),
          day: brag.data()['day'+i]['day'],
          distance: brag.data()['day'+i]['distance'],
          elevation: brag.data()['day'+i]['elevation'],
          endLocation: brag.data()['day'+i]['endLocation'],
          startLocation: brag.data()['day'+i]['startLocation'],
          stravaLink: brag.data()['day'+i]['stravaLink']
        }
        days.push(newDay);
      }
      let newBrag: Brag = {
        year: brag.data()['year'],
        days: days
      }
      this.brags.push(newBrag);
    })
    console.log(this.brags);
  }
}
