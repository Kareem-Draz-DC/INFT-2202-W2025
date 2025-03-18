

export const pokemonParty: any[] = []


export function addPokemon(pokemon: any) {
    pokemonParty.push(pokemon)
}

export function removePokemon(pokemon: any) {
    let i = pokemonParty.indexOf(pokemon)
    pokemonParty.splice(i,1)
}