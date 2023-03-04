const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://sahil786:${process.env.PASSWORD}@cluster0.cdqerkb.mongodb.net/${process.env.DATABASE_HOST}?retryWrites=true&w=majority`)
    .then(()=>{
        console.log("Database connection is successfull at 27017 port ....");
    })
    .catch((e)=>{
        console.log(e);
    })