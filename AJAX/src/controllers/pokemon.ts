
import { pokemonParty, addPokemon, removePokemon } from '../models/Pokemon.js' 

export function displayHomepage(req: Request, res: any): any {
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
     
     console.log(pokemonData)
     
     // Display pokemonResults.ejs file
     res.render("pokemonResults.ejs", {pokemon})
}