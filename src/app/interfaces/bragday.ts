import { Timestamp } from "firebase/firestore";

export interface BragDay {
    date: Date;
    day: string;
    distance: number;
    elevation: number;
    endLocation: string;
    startLocation: string;
    stravaLink: string;
}