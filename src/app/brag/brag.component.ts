import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { db } from '../../environments/environment';
import { BragDay } from '../interfaces/bragday';
import { Brag } from '../interfaces/brag';
import { Timestamp } from "firebase/firestore";
import { doc, setDoc, getDoc, addDoc, collection, updateDoc, getDocs, limit, query, where, and, or } from 'firebase/firestore';

@Component({
  selector: 'app-brag',
  templateUrl: './brag.component.html',
  styleUrl: './brag.component.css'
})
export class BragComponent {
  constructor( private route: ActivatedRoute, private router: Router ) {}
  brag: Brag = {
    year: 0,
    days: new Array<BragDay>,
    distance: "",
    elevation: ""
  }
  ngOnInit(){
    this.getBrag();
  }
  async getBrag(){
    const bragYear = (this.route.snapshot.paramMap.get('year'));
    const bragDoc = await getDoc(doc(db, 'brag', "brag"+bragYear));
    const numberFormatter = new Intl.NumberFormat('en-US');
    let days = new Array<BragDay>();
    let distance = 0;
    let elevation = 0;
    for (let i = 0; i < 8; i++){
      let timestamp = new Timestamp(bragDoc.get('day'+i)['date']['seconds'], bragDoc.get('day'+i)['date']['nanoseconds'])
      let newDay: BragDay = {
        date: timestamp.toDate(),
        day: bragDoc.get('day'+i)['day'],
        distance: bragDoc.get('day'+i)['distance'],
        elevation: bragDoc.get('day'+i)['elevation'],
        endLocation: bragDoc.get('day'+i)['endLocation'],
        startLocation: bragDoc.get('day'+i)['startLocation'],
        stravaLink: bragDoc.get('day'+i)['stravaLink']
      }
      distance += bragDoc.get('day'+i)['distance'];
      elevation += bragDoc.get('day'+i)['elevation'];
      days.push(newDay);
    }
    let newBrag: Brag = {
      year: bragDoc.get('year'),
      days: days,
      distance: numberFormatter.format(Math.round((distance + Number.EPSILON) * 100) / 100),
      elevation: numberFormatter.format(Math.round((elevation + Number.EPSILON) * 100) / 100)
    }
    this.brag = newBrag;
  }
}
