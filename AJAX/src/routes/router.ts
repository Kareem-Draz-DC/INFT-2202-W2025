import express from 'express'
import { displayHomepage, searchPokemon, savePokemonToParty, showPokemonParty, deletePokemonFromParty, displayEditPokemonPage, updatePokemon, displaySignupPage, signUp, displayLoginPage } from '../controllers/pokemon.js'
import passport from 'passport'

export const router: any = express.Router()
router.get("/", displayHomepage)
router.get("/home", displayHomepage)
router.post("/searchPokemon", searchPokemon)
router.post("/savePokemon", savePokemonToParty)
router.get("/showParty", showPokemonParty)
router.get("/editPokemon/:mongoPokemonID", displayEditPokemonPage)
router.post("/updatePokemon/:pokemonId", updatePokemon)
router.post("/deletePokemon", deletePokemonFromParty)

router.get("/signup", displaySignupPage)

router.post("/signup", signUp)

router.get("/login", displayLoginPage)

router.get('/logout', function(req: any, res: any) {
  res.locals.user = null
  console.log('user after logout:')
  console.log(req.locals)
  console.log(req.user)
  req.session = null
  res.redirect("/login")
})

router.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req: any, res: any) {
      res.locals.user = req.user
      req.session.user = req.user
      console.log('user /login')
      console.log(req.user)
      console.log('res.locals')
      console.log(res.locals)
      res.redirect('/');
    });