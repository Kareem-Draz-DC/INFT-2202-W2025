
import { Movie } from '../types/movie.interface.js';
import { Rating } from '../enums/rating.enum.js'

export let movies: Movie[] = [
    {
        id: 1,
        title: "Interstellar",
        director: "Christopher Nolan",
        year: 2014,
        genre: "Sci-Fi",
        rating: Rating.PG13,
        actors: [
            {
                id: 2,
                firstName: "Matthew",
                lastName: "McConaughey"
            }
        ]
    },
    {
        id: 2,
        title: "Moana 2",
        director: "Dana Ledoux Miller",
        year: 2024,
        genre: "Adventure",
        rating: Rating.PG,
        actors: [
            {
                id: 3,
                firstName: "Dwayne",
                lastName: "Johnson"
            },
            {
                id: 4,
                firstName: "Awhimai",
                lastName: "Fraser"
            },
        ]
    },
]



// "Upload - Sci - Fi",
//     "Interstellar",
//     "Brooklyn 99",
//     "The Recruit",
//     "LouderMilk"

