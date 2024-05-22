import { Timestamp } from "firebase/firestore";

export interface BragDay {
    date: Date;
    day: string;
    number: string;
    distance: number;
    elevation: number;
    movingTime: string;
    endLocation: string;
    startLocation: string;
    stravaLink: string;
}