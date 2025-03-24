import express from 'express'
import { displayHomepage, searchPokemon, savePokemonToParty, showPokemonParty, deletePokemonFromParty } from '../controllers/pokemon.js'
export const router: any = express.Router()
router.get("/", displayHomepage)
router.get("/home", displayHomepage)
router.post("/searchPokemon", searchPokemon)
router.post("/savePokemon", savePokemonToParty)
router.get("/showParty", showPokemonParty)

router.post("/deletePokemon", deletePokemonFromParty)


