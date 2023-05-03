const express = require("express");
const router = express.Router();
const { requireAuth } = require("../../utils/auth.js");
const { Photo } = require("../../db/models");
const AWS = require('aws-sdk')
const {
  singleMulterUpload,
  singlePublicFileUpload,
  retrievePrivateFile,
} = require("../../awsS3.js");


AWS.config.update({
    region: "us-east-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });
  
  const s3 = new AWS.S3();

  const deleteFile = async (filename) => {
    try {
      await s3.deleteObject({ Bucket: "lvcky", Key: filename }).promise();
      return { success: true, data: "File deleted Successfully" }
    } catch(error) {
      return { success: false, data: null }
    }
  }

router.post(
  "/:breweryId",
  singleMulterUpload("image"),
  // singlePublicFileUpload("image"),
  requireAuth,
  async (req, res) => {
    const { breweryId } = req.params;
    const userId = req.user.id;
    const imgUpload = await singlePublicFileUpload(req.file);
    const img = await Photo.create({
      breweryId: +breweryId,
      userId: +userId,
      URL: imgUpload,
    });
    res.status(200);
    res.json(img);
  }
);

router.get("/:breweryId", async (req, res) => {
  const { breweryId } = req.params;
  const images = await Photo.findAll({ where: { breweryId: +breweryId } });
  res.status(200);
  return res.json(images);
});




router.delete("/:fileId", async (req, res) => {
  const { fileId } = req.params;
  const file = await Photo.findOne({ where: { id: +fileId } });
  if (file) {
    if(+req.user.id === +file.userId){
    deleteFile(file.URL)

    await file.destroy()
    res.status(200)
    return res.json({"message":"success"})
}else{
    res.status(403)
    return res.json({"message":"forbidden"})
}

  } else {
    res.status(404);
    return res.json({ message: "this file does not exist." });
  }
});

module.exports = router;
