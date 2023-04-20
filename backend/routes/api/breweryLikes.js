const express = require('express');
const router = express.Router();
const { BreweryLike, Brewery } = require("../../db/models");
const { requireAuth } = require("../../utils/auth.js");


router.delete('/:breweryId/:likeId', requireAuth,async(req, res)=> {
    const userId = req.user.id;
    const { breweryId, likeId } = req.params;
    const brewery = await Brewery.findOne({where:{Id:+breweryId}})
    const like = await BreweryLike.findOne({where:{id:+likeId}})
    if(brewery){
        if(like){
            if(userId === like.userId){
                like.destroy();
                res.status(200);
                return res.json({"Message":"successfully Deleted"})
            }else{
                console.log(like.userId)
                res.status(403)
                res.json({"Message":"This like does not belong to you"});
            }
        }else{
            res.status(404)
            res.json({"Message":"This like does not exist"});
        }

    }else{
        res.status(404)
        res.json({"Message":"This brewery does not exist"});
    }

})
router.get('/:breweryId', async(req, res)=> {
    const {breweryId} = req.params
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