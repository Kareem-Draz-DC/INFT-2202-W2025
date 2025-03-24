

Pokemon App

(User Stories) As A User...

Note: I like to follow the structure of building the route -> controller -> view

1. AAU, I want to be able to search a pokemon and see the pokemon that I searched (DONE)
   1. Change test/hello page to a home page, and add search form on index.ejs (DONE)
   2. Define the route: POST /searchPokemon 
   3. Define the controller: function searchPokemon(req, res) {}
   4. Define the view: pokemonResults.ejs

2. AAU, I want to be able to save a pokemon to my party (DONE)
   1. Create a button in pokemonResults.ejs to save a pokemon in party, and the button will submit a form when clicked that contains the pokemon data as hidden fields. The form will create a POST HTTP request to /savePokemon
   2. Create a route in our router to handle a POST request for /savePokemon
   3. Create a controller called savePokemonToParty(req,res){} that will handle the request at /savePokemon
   4. In the controller, we will take the form data from the request body and push the data into our pokemonParty array
   5. At the end of the controller logic, we will render a page called myPokemonParty.ejs which will display all the pokemons in my party
3. AAU, I want to be able to see a list of all the pokemons in my party (DONE)
4. AAU, I want to be able to delete/remove a pokemon from my party
   ---------------------------------------------
5. Read on EJS partials, and create a header and a footer for all our EJS pages
   - Include in the header a NAVBAR that will help the user navigate to all our GET routes (i.e./, /showParty)
   - Include a footer that is appropriate
6. Add CSS bootstrap integration to EJS to make it look nicer
7. (Challenge) Add functionality to edit/update an existing pokemon