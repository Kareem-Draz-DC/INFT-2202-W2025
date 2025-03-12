export {}

let hello: string = 'hello world';
console.log(hello);


let x: number = 1;

// Choice 1: Make the code wait until the async code is executed and a value is returned before proceeding to the next line of code
// Async / Await (with Try/Catch)
// try {
    // let pokemon: any = await getPokemonFromDatabase(); 
//     console.log("Line 13 ran!")
//     console.log(pokemon)
// } catch(error : any) {
//     console.log('this is our error')
//     console.log(error)
// }


// Choice 2: Make the async code run in the background and continue executing the rest of the code as usual

// let pokemon = getPokemonFromDatabase()
// .then((dataFromPromise: any) => {
//     // Do with data what you need
//     let arrayData = dataFromPromise.split('')
//     return arrayData
// })
// .then((arrayData: string[]) => {
//     console.log("Data from Database:")
//     console.log(arrayData)
// })
// .catch(err => console.log(err))


// console.log("Line 35 ran!!!!")

// async function getPokemonFromDatabase(): Promise<any> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("timer expired!")
//             resolve("Pikachu")
//             // reject({error: 400, message: "Malware detected"})
//         }
//         , 5000)
//     })
// }


// ----------------------------------------------------------------


const pokemonQuery = "pikachu"

let API_URL = "https://pokeapi.co/api/v2/pokemon/"

// Async / Await
let response = await fetch(API_URL + pokemonQuery)

console.log(response.json())