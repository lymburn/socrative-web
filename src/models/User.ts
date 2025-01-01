import { Room } from "./Room";

export interface User {
    id: number;
    email: string;
    rooms: [Room];
}