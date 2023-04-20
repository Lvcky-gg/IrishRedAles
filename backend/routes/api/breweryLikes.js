const express = require('express');
const router = express.Router();
const { BreweryLike, Brewery } = require("../../db/models");
const { requireAuth } = require("../../utils/auth.js");


router.delete(':/breweryId/:likeId', requireAuth,async(req, res)=> {

})
router.get('/:breweryId', async(req, res)=> {
    const {breweryId} = req.params
    console.log(breweryId)
    const breweryLikes = await BreweryLike.findAll({where:{breweryId:+breweryId}})
    if(breweryLikes.length){
        res.status(200);
        return res.json(breweryLikes)
    }else{
        res.status(404)
        return res.json({"Message":"There are no likes for this brewery"})
    }
});
router.post('/:breweryId', requireAuth, async(req, res)=> {
    const userId = req.user.id
    const {breweryId} = req.params
    const brewery = await Brewery.findOne({where:{Id:+breweryId}})
    if(brewery){
        const newLike = await BreweryLike.create({
            breweryId:+breweryId,
            userId
        })
        res.status(200)
        res.json(newLike)
    }else{
        res.status(404)
        res.json({"Message":"This brewery does not exist"});
    }

})


module.exports = router