const express = require("express");
const router = express.Router();
const { requireAuth } = require("../../utils/auth.js");
const { Photo } = require("../../db/models");
const { singleMulterUpload, singlePublicFileUpload, retrievePrivateFile } = require("../../awsS3.js");


router.post(
    "/:breweryId",
    singleMulterUpload("image"),
    // singlePublicFileUpload("image"),
    requireAuth,
    async(req, res)=>{
        const {breweryId} = req.params;
        const userId = req.user.id;
        const imgUpload = await singlePublicFileUpload(req.file)
        const img = await Photo.create({
            breweryId:+breweryId,
            userId:+userId,
            URL:imgUpload
        })
        res.status(200)
        res.json(img)
    }
)

router.get(
    "/:breweryId",
    async(req, res)=> {
        const {breweryId} = req.params;
        const images = await Photo.findAll({where:{breweryId:+breweryId}})
        res.status(200)
        return res.json(images)
    }
)


module.exports = router