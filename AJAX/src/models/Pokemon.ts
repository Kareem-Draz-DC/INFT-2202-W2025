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
export function removePokemon(pokemon: any) {
    let i = pokemonParty.indexOf(pokemon)
    pokemonParty.splice(i,1)
}