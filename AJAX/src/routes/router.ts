import express from 'express'
import { displayHomepage, searchPokemon } from '../controllers/pokemon.js'

export const router: any = express.Router()

router.get("/", displayHomepage)
router.get("/home", displayHomepage)

router.post("/searchPokemon", searchPokemon)