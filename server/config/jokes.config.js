
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/{databaseName}" , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() =>  console.log("You're now inside the mainframe..."))
    .catch(err => console.log("MELTDOWN! MELTDOWN! MELTDOWN!",err));

