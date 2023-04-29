const express = require("express");
const router = express.Router();
const { Review, User } = require("../../db/models");
const { requireAuth } = require("../../utils/auth.js");

router.get("/", async (req, res) => {
  const reviews = await Review.findAll({ include: [{ model: User }] });
  if (reviews.length) {
    return res.json({ reviews: reviews });
  } else {
    res.status(404);
    return res.json({ message: "There are no reviews" });
  }
});

router.get("/:reviewId", async (req, res) => {
  const { reviewId } = req.params;
  const review = await Review.findOne({
    include: [{ model: User }],
    where: { id: +reviewId },
  });
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

router.put("/:reviewId", requireAuth, async (req, res) => {
  const { reviewId } = req.params;
  const { description, rating } = req.body;

  const review = await Review.findOne({ where: { id: +reviewId } });

  if (review) {
    const newReview = await review.update({
      rating,
      description,
    });

    return res.json(newReview);
  } else {
    res.status(404);
    return res.json({ Message: "This Review does not exist" });
  }
});

module.exports = router;
