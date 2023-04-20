const express = require("express");
const router = express.Router();
const { Review } = require("../../db/models");
const { requireAuth } = require("../../utils/auth.js");

router.get("/:reviewId", async (req, res) => {
  const { reviewId } = req.params;
  const review = await Review.findOne({ where: { id: +reviewId } });
  if (review) {
    res.status(200);
    return res.json(review);
  } else {
    res.status(404);
    res.json({ Message: "This review does not exist yet." });
  }
});

router.delete("/:reviewId", requireAuth, async (req, res) => {
  const { reviewId } = req.params;
  const review = await Review.findOne({ where: { id: +reviewId } });
  const userId = req.user.id;
  if (review) {
    if (userId === review.ownerId) {
      review.destroy();
      res.status(200);
      return res.json({ Message: "successfully deleted review" });
    } else {
      res.status(403);
      return res.json({ Message: "This review does not belong to you." });
    }
  } else {
    res.status(404);
    res.json({ Message: "This review does not exist yet." });
  }
});

module.exports = router;
