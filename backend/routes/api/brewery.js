const express = require('express');
const router = express.Router();
const { Brewery, Review } = require('../../db/models');


router.get('/',
async (req, res) => {

    let breweries = await Brewery.findAll({include:[{model:Review}]})
    const result = [];
    
    for(let i = 0; i < breweries.length; i++){
         let sum = 0
         for ( let j = 0; j < breweries[i].Reviews.length; j++){
            sum += breweries[i].Reviews[j].rating
         }
         let id = breweries[i].id;
         let ownerId = breweries[i].ownerId;
         let addressLineOne = breweries[i].addressLineOne;
         let city = breweries[i].city;
         let description = breweries[i].description;
         let zip = breweries[i].zip;
         let state = breweries[i].state;
         let rating = sum/breweries[i].Reviews.length;
         let country = breweries[i].country;
         let lat = breweries[i].lat;
         let lng = breweries[i].lng;
         let createdAt = breweries[i].createdAt;
         let updatedAt = breweries[i].updatedAt;
         if(!breweries[i].Reviews.length)rating = 0;
         let reviews = breweries[i].Reviews;

         result.push({
            id, ownerId, addressLineOne, city, description, zip, state, 
            country, lat, lng, rating, createdAt, updatedAt, reviews
         })

    }

    return res.json({"Breweries":result})

});



module.exports = router