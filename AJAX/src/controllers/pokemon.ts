
import { pokemonParty, addPokemon, removePokemon, getPokemonParty, Pokemon } from '../models/Pokemon.js' 

export function deletePokemonFromParty(req: any, res: any) {
     // Extract the form data
     let pokemonName = req.body.pokemonName
     // Delete pokemon from Party
     removePokemon(pokemonName)
     // Redirect back to /showParty page
     res.redirect("/showParty")
}

export function savePokemonToParty(request: any, response: any) {
     // let pokemonName = request.body?.pokemonName;
     // let pokemonWeight = request.body?.pokemonWeight;
     // let pokemonImage = request.body?.pokemonImage;
     
     let { pokemonName, pokemonWeight, pokemonImage } = request.body

     let newPokemon: Pokemon = {
          name: pokemonName,
          weight: pokemonWeight,
          image: pokemonImage
     }
     addPokemon(newPokemon)
     let pokemonParty = getPokemonParty()
     response.render('myPokemonParty.ejs', {pokemonParty})
}
export function showPokemonParty(req: any, res: any) {
     let pokemonParty = getPokemonParty()
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