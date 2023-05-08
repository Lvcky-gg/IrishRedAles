const express = require("express");
const router = express.Router();
const { requireAuth } = require("../../utils/auth.js");
const { Beer, Brewery } = require("../../db/models");
const beer = require("../../db/models/beer.js");


router.get("/:breweryId",  async (req, res) => {
    const {breweryId} = req.params;
    const beers = await Beer.findAll({where:{breweryId:+breweryId}})
    if(beers.length){
        res.status(200)
        return res.json({beers})

    }else{
        res.status(404)
        return res.json({"message":"There are no beers at this location."})
    }

})
router.post("/:breweryId", requireAuth, async (req, res) => {
    const {breweryId} = req.params;
    const {name, price} = req.body
    const userId = req.user.id
    console.log(userId)
    const brewery = await Brewery.findOne({where:{id:+breweryId}})
    if(brewery){
        if(+brewery.ownerId === +userId  ){
            const newBeer = await Beer.create({
                name,
                price,
                breweryId:+breweryId,
                userId
            })
            res.status(200)
            return res.json(newBeer)

        }else{
            res.status(403)
            return res.json({"message":"This brewery is not yours"})

        }

    }else{
        res.status(404)
        return res.json({"message":"This brewery does not exist"})
    }


})
router.put("/:beerId", requireAuth, async (req, res) => {
    const {beerId} = req.params;
    const {name, price} = req.body
    const userId = req.user.id
    const beer = await Beer.findOne({where:{id:+beerId}})
    if(beer){
        if(+userId === +beer.userId){
            const mod = await beer.update({name, price})
            res.status(200)
            return res.json(mod)

        }else{
            res.status(403)
            return res.json({"message":"This beer does not belong to you"})
        }
        

    }else{
        res.status(404)
        return res.json({"message":"This beer does not exist"})
    }

})
router.delete("/:beerId", requireAuth, async (req, res) => {
    const {beerId} = req.params;
    const userId = req.user.id
    const beer = await Beer.findOne({where:{id:+beerId}})
    if(beer){
        if(+userId === +beer.userId){
            beer.destroy()
            res.status(200)
            return res.json({"message":"success"})

        }else{
            res.status(403)
            return res.json({"message":"This beer does not belong to you"})
        }
        

    }else{
        res.status(404)
        return res.json({"message":"This beer does not exist"})
    }

})


module.exports = router;