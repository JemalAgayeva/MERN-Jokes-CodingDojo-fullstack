const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());


//***************** Mongoose code **************//

require("./server/config/jokes.config")

// const Joke = require("./server/models/jokes.model")

require("./server/routes/jokes.route") (app)

//***************** Mongoose code **************//


app.listen(port, () => console.log(`Listening on port ${port}`));