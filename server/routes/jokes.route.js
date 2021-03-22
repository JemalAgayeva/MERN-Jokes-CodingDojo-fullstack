
const JokeController = require('../controllers/jokes.controller');
const Joke = require('../models/jokes.model');
 
module.exports = app => {
    app.get("/api/jokes/all", JokeController.findAllJokes);
    app.post("/api/jokes/create", JokeController.createOneJoke);
    app.get("/api/jokes/random", JokeController.randomJoke);
    app.get("/api/jokes/:jokeId", JokeController.findAJoke);
    app.put("/api/jokes/update/:jokeId", JokeController.updateAJoke);
    app.delete("/api/jokes/delete/:jokeId", JokeController.deleteAJoke);
}