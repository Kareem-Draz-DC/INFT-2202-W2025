
import { pokemonParty, addPokemon, removePokemon, getPokemonParty, Pokemon } from '../models/Pokemon.js' 

export function deletePokemonFromParty(req: any, res: any) {
     // Extract the form data
     let pokemonName = req.body.pokemonName
     // Delete pokemon from Party
     removePokemon(pokemonName)
     // Redirect back to /showParty page
     res.redirect("/showParty")
}

import { PokemonModel } from '../models/Pokemon.js'
export function savePokemonToParty(request: any, response: any) {
     let { pokemonName, pokemonWeight, pokemonImage } = request.body
     let newPokemon: Pokemon = {
          name: pokemonName,
          weight: pokemonWeight,
          image: pokemonImage
     }
     // addPokemon(newPokemon)
     PokemonModel.create(newPokemon).then(() => console.log('Pokemon added to Party!'))
     // let pokemonParty = getPokemonParty()
     // response.render('myPokemonParty.ejs', {pokemonParty})
     response.redirect("/showParty")
}
export async function showPokemonParty(req: any, res: any) {
     // let pokemonParty = getPokemonParty() // this method is fetching the list of pokemons from our old in-memory array of pokemons
     let pokemonParty = await PokemonModel.find({}) // This method fetches the pokemons from our mongoDB database
     res.render('myPokemonParty.ejs', {pokemonParty})
}
export function displayHomepage(req: any, res: any): any {
     // Display index.ejs file
     res.render('index.ejs')
}
export async function searchPokemon(req: any, res: any): Promise<any> {
     // All form data is always stored inside the HTTP request BODY
     console.log(req.body) // { pokemonName: 'pikachu' }

     const pokemonName: any = req.body?.pokemonName

     const searchedPokemon = await fetch(`http://pokeapi.co/api/v2/pokemon/${pokemonName}`);

     const pokemonData = await searchedPokemon.json()

     const pokemon = {
          name: pokemonData.name,
          image: pokemonData.sprites.front_shiny,
          weight: pokemonData.weight
     }
     
     // console.log(pokemonData)
     
     // Display pokemonResults.ejs file
     res.render("pokemonResults.ejs", {pokemon})
}