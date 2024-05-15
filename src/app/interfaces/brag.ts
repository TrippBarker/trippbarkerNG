import { BragDay } from "./bragday";
export interface Brag {
    year: number;
    days: Array<BragDay>;
    distance: string;
    elevation: string;
}