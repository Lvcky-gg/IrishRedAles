const express = require('express');
const router = express.Router();
const { Brewery, Review } = require('../../db/models');


router.get('/',
async (req, res) => {

    let breweries = await Brewery.findAll()
    const result = [];
    for(let i = 0; i < breweries.length; i++){
        console.log(breweries[i])
    }

    return res.json({"Breweries":breweries})

});



module.exports = router