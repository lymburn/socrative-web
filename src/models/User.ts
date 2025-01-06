import { Room } from "./Room";

/**
 * Represents a user in the system, including their email and associated rooms.
 */
export interface User {
    id: number;
    email: string;
    rooms: [Room];
}