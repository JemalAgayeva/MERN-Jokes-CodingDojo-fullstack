Jokes API - fullstack version

Side note, this is the assignment from the MERN stack at Coding Dojo. But on top of the assignment itself, the project has been converted into fullstack as a practice.

To solidify what we've read about mongoose commands and express, lets create a new express project from scratch called "Jokes."
 ~ Create a project folder named "Jokes"
 ~ Within "Jokes" create a modularized folder structure (server ==> controllers, routes, models, config, server.js)
 ~ Initialize a package json file using npm
 ~  Install express and mongoose
 ~ Create a mongoose.config.js file and setup your mongoose.connect function
 ~ Create a jokes.model.js, jokes.controller.js, and a jokes.routes.js in the applicable folders
 ~  In the jokes.model file create and JokeSchema and export the mongoose.model("joke", JokeSchema)
 ~  In the jokes.controller import your model from the models file
 ~  Export a function to get all jokes
 ~  Export a function to get a single joke
 ~  Export a function to create a joke
 ~  Export a function to update a joke
 ~  Export a function to delete a joke
 ~  In the jokes.routes file: import * from your controller file and add an express route for every route listed in the wireframe
 ~  In your server.js file: setup express, import your joke routes, and run your server
 ~  Use Postman to create new jokes and use the browser to view them
 ~  Use Postman to perform the POST DELETE and PUT operations and use the browser to GET them
