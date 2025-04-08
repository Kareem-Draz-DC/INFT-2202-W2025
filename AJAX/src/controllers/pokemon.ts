
import { pokemonParty, addPokemon, removePokemon, getPokemonParty, Pokemon } from '../models/Pokemon.js' 
import { UserModel } from '../models/User.js'
import { genSaltSync, hashSync } from 'bcrypt-ts'

export async function displaySignupPage(req: any, res: any) {
     res.render('signUp.ejs')
}

export async function signUp(req: any, res: any) {
     let { username, email, passwordOne, passwordTwo } = req.body

     if (passwordOne !== passwordTwo) {
          res.status(400).json({ successful: false, message: "passwords do not match. Please try again"})
     }
     let salt = genSaltSync(10)
     let encryptedPassword = hashSync(passwordOne, salt)

     UserModel.create({
          username: username,
          email: email,
          password: encryptedPassword // We do not want to store a plan password
     })
     .then(() => console.log('User created successfully!'))
     .catch((err: any) => console.log('Error in creating user:', err))
     res.redirect('/login')
}

export async function displayLoginPage(req: any, res: any) {
     res.render('loginPage.ejs')
}

export async function deletePokemonFromParty(req: any, res: any) {
     // Extract the form data
     // let pokemonName = req.body.pokemonName // OLD
     let pokemonId = req.body.pokemonId
     // Delete pokemon from Party
     // removePokemon(pokemonName)
     await PokemonModel.findByIdAndDelete(pokemonId)
     // Redirect back to /showParty page
     res.redirect("/showParty")
}

import { PokemonModel } from '../models/Pokemon.js'
export function savePokemonToParty(request: any, response: any) {
     let { pokemonName, pokemonWeight, pokemonImage } = request.body
     let newPokemon: Pokemon = {
          name: pokemonName,
          weight: pokemonWeight,
          image: pokemonImage
     }
     // addPokemon(newPokemon)
     PokemonModel.create(newPokemon).then(() => console.log('Pokemon added to Party!'))
     // let pokemonParty = getPokemonParty()
     // response.render('myPokemonParty.ejs', {pokemonParty})
     response.redirect("/showParty")
}
export async function showPokemonParty(req: any, res: any) {
     // let pokemonParty = getPokemonParty() // this method is fetching the list of pokemons from our old in-memory array of pokemons
     let pokemonParty = await PokemonModel.find({}) // This method fetches the pokemons from our mongoDB database
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


export async function displayEditPokemonPage(request: any, response: any) {
     try {
          let pokemonId = request.params.mongoPokemonID
          let pokemon = await PokemonModel.findById(pokemonId)
          response.render('editPokemon.ejs', {pokemon})
     } catch (error: any) {
          response.json({
               status: 401,
               message: "Pokemon not found."
          })
     }
}

export async function updatePokemon(request: any, response: any) {
     try {
          let { pokemonName, pokemonWeight } = request.body
          let { pokemonId } = request.params
          await PokemonModel.findByIdAndUpdate(pokemonId, {
               name: pokemonName,
               weight: pokemonWeight
          })
          response.redirect("/showParty")
     } catch (error: any) {
          response.json({
               status: 401,
               message: "Error updating pokemon."
          })
     }
}