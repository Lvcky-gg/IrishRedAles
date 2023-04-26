const express = require("express");
const router = express.Router();
const { ReviewLike, Review } = require("../../db/models");
const { requireAuth } = require("../../utils/auth.js");

router.delete("/:reviewId/:likeId", requireAuth, async (req, res) => {
  const userId = req.user.id;
  const { reviewId, likeId } = req.params;
  const review = await Review.findOne({ where: { id: +reviewId } });
  const like = await ReviewLike.findOne({ where: { id: +likeId } });
  if (review) {
    if (like) {
      if (userId === like.userId) {
        like.destroy();
        res.status(200);
        return res.json({ Message: "successfully Deleted" });
      } else {
        res.status(403);
        res.json({ Message: "This like does not belong to you" });
      }
    } else {
      res.status(404);
      res.json({ Message: "This like does not exist" });
    }
  } else {
    res.status(404);
    res.json({ Message: "This review does not exist" });
  }
});
router.get("/:reviewId", async (req, res) => {
  const { reviewId } = req.params;
  const reviewLikes = await ReviewLike.findAll({
    where: { reviewId: +reviewId },
  });
  if (reviewLikes.length) {
    res.status(200);
    return res.json(reviewLikes);
  } else {
    res.status(404);
    return res.json({ Message: "There are no likes for this review" });
  }
});
router.post("/:reviewId", requireAuth, async (req, res) => {
  const userId = req.user.id;
  const { reviewId } = req.params;
  const review = await Review.findOne({ where: { id: +reviewId } });
  if (review) {
    const newLike = await ReviewLike.create({
      reviewId: +reviewId,
      userId,
    });
    res.status(200);
    res.json(newLike);
  } else {
    res.status(404);
    res.json({ Message: "This review does not exist" });
  }
});
module.exports = router;
