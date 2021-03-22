const Joke = require('../models/jokes.model');
 
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => { 
            console.log("finding all jokes");
            res.json({ results: allJokes })
})
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.randomJoke = (req, res) =>{
    console.log("random")
    Joke.find()
        .then (alljokes => {
            // console.log("all quotes look like this", alljokes)
            let maxindex=alljokes.length
            console.log(Math.random(maxindex))
            function getRandomInt(max){
                return Math.floor(Math.random()*Math.floor(max));
            }
            let randomNum = getRandomInt(maxindex)
            console.log("random joke: ", randomNum)
            res.json({results: alljokes[randomNum]})
        })
        .catch()
}

module.exports.findAJoke = (req, res) => {
    Joke.findOne({_id: req.params.jokeId})
    .then (joke => {
        console.log("should get one joke");
        res.json({results: joke})
    })
    .catch(err => res.json({message: 'Something went wrong', error: err}))
}

 
module.exports.createOneJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreateJoke => {
            console.log("creating a joke");
            res.json({ results: newlyCreateJoke })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateAJoke = (req, res) => {
    Joke.findOneAndUpdate (
        {_id: req.params.jokeId},
        req.body,
        {new:true})
    .then (updatedJoke => {
        console.log("should update joke");
        res.json({results: updatedJoke})
    })
    .catch(err => res.json({message: 'Something went wrong', error: err}))
}

module.exports.deleteAJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.jokeId})
    .then (deleteJoke => {
        console.log("should delete joke");
        res.json({results: deleteJoke})
    })
    .catch(err => res.json({message: 'Something went wrong', error: err}))

}