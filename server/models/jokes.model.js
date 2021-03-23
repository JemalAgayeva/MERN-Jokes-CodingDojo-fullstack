
const mongoose = require('mongoose');

// Basic setup of the Mongoose Schema
const JokeSchema = new mongoose.Schema({
    writtenBy: {
        type: String,
        required:[true,"Author is required"],
        minlength: [3,"Setup has to be more than 2 characters"]
    },
    content: {
        required:[true,"Content is required"],
        type: String
    },
    // punchline: String
},
{timestamps:true})


// This is how we register our schema.
const Joke = mongoose.model("Joke", JokeSchema);

// Finally we export it out of the file.
module.exports = Joke;
