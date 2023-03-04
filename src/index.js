// All necessary modules that are reg for our project
require("dotenv").config();
require("./database/conn");
const express = require("express");
const hbs = require("hbs");
const path = require("path");
const router = require("./router/router");
const app = express();
// importing the static folder
const staticPath = path.join(__dirname ,'../public');
app.use(express.static(staticPath));

// changing the views name and registering the partials ....
const dynamicPath = path.join(__dirname , "../templates/views");
const partialsPath = path.join(__dirname , "../templates/partials");
hbs.registerPartials(partialsPath);
app.set("view engine"  , "hbs");
app.set("views" , dynamicPath);

// making use of routing via router file
app.use(router);




// listening to the server port no.
const port = process.env.PORT;
app.listen(port,()=>{
    console.log("I am onnn at 8000 .....");
})