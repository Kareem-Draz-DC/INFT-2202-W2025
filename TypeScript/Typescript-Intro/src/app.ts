

// We want to display a list of movies to the user via the DOM
let movies: string[] = [
    "Upload - Sci - Fi",
    "Interstellar",
    "Brooklyn 99",
    "The Recruit",
    "LouderMilk"
]

function createMoviePost(movie: string) {
    let container = document.querySelector(".container")
    let newMoviePost = document.createElement("P")
    newMoviePost.innerHTML = movie
    console.log(container)
    console.log(newMoviePost)
    container?.appendChild(newMoviePost)
}

document.addEventListener('DOMContentLoaded', () => {
    let message: string = "Hello from typescript!"
    movies.forEach(createMoviePost)
    // movies.forEach(movie => {
    //     createMoviePost(movie)
    // })
    console.log(message)
})






