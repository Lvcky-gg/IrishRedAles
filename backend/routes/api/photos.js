const express = require("express");
const router = express.Router();
const { requireAuth } = require("../../utils/auth.js");
const { Photo } = require("../../db/models");
const { singleMulterUpload, singlePublicFileUpload } = require("../../awsS3.js");


router.post(
    "/:breweryId",
    singleMulterUpload("image"),
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
        res.json(img)
    }
)


module.exports = router