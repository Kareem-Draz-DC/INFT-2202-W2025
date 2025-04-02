import express from 'express'
import { displayHomepage, searchPokemon, savePokemonToParty, showPokemonParty, deletePokemonFromParty, displayEditPokemonPage, updatePokemon } from '../controllers/pokemon.js'
export const router: any = express.Router()
router.get("/", displayHomepage)
router.get("/home", displayHomepage)
router.post("/searchPokemon", searchPokemon)
router.post("/savePokemon", savePokemonToParty)
router.get("/showParty", showPokemonParty)
router.get("/editPokemon/:mongoPokemonID", displayEditPokemonPage)
router.post("/updatePokemon/:pokemonId", updatePokemon)

router.post("/deletePokemon", deletePokemonFromParty)


