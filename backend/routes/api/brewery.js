const express = require('express');
const router = express.Router();
import { Brewery, Review } from '../../db/models';


router.get('/',
async (req, res) => {

    let breweries = Brewery.findAll({include:[{model:Review}]})

    return res.json({"Breweries":breweries})

});



module.exports = router