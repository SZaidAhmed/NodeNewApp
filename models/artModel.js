const mongoose = require("mongoose");

const artScheme = new mongoose.Schema({
    title:String,
    rating:Number,
    cost:Number
})

const Art = new mongoose.model("Art" , artScheme);

module.exports = Art;