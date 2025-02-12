import { Rating } from "../enums/rating.enum.js";

interface Actor {
    id: number;
    firstName: string;
    lastName: string;
}

export interface Movie {
    id: number;
    title: string;
    director: string;
    year: number;
    genre: string;
    rating: Rating; // Use an ENUM as a type
    actors?: Actor[] // ? makes it optional
}

