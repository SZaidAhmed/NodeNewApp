const Art = require("../models/artmodel");

exports.addArt = async (req , res) =>{
    try {
        console.log(req.body);
        var art = await Art.create(req.body);
        console.log(art);
        res.status(200).json({
        status:"successful",
        data:{
            art
        }
    })    
    } catch (error) {
        console.log(error);
        res.status(404).json({error: error.message})
    }  
};