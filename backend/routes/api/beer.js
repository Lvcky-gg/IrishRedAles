const express = require("express");
const router = express.Router();
const { requireAuth } = require("../../utils/auth.js");
const { Beer, Brewery } = require("../../db/models");


router.get("/:breweryId",  async (req, res) => {
    const {breweryId} = req.params;
    const beers = await Beer.findAll({where:{breweryId:+breweryId}})
    if(beers){
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
    const brewery = await Brewery.findOne({where:{breweryId:+breweryId}})
    if(brewery){
        if(+brewery.ownerId === +userId  ){
            const newBeer = await Beer.create({
                name,
                price,
                breweryId:+breweryId
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

})
router.delete("/:beerId", requireAuth, async (req, res) => {

})


module.exports = router;