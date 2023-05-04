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

})
router.put("/:beerId", requireAuth, async (req, res) => {

})
router.delete("/:beerId", requireAuth, async (req, res) => {

})


module.exports = router;