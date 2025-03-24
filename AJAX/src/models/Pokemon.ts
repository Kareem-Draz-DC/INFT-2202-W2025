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