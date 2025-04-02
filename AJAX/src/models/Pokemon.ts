import mongoose from 'mongoose'
// Create the Pokemon Model
const pokemonSchema = new mongoose.Schema({
    name: String,
    weight: String,
    image: String
})

// Create the Pokemon Model. The Model is what houses all the internal CRUD methods provided as tools for us by mongoose to wirh with MongoDB
export const PokemonModel = mongoose.model('Pokemon', pokemonSchema)

// ------------
export interface Pokemon {
    name: string;
    weight: string;
    image: string;
}
export const pokemonParty: Pokemon[] = []
export function getPokemonParty() {
    return pokemonParty
}
export function addPokemon(pokemon: any) {
    pokemonParty.push(pokemon)
}
export function removePokemon(pokemonName: any) {
    let pokemonItem: any = pokemonParty.find(pokemon => pokemon.name == pokemonName)
    let i = pokemonParty.indexOf(pokemonItem)
    pokemonParty.splice(i,1)
}