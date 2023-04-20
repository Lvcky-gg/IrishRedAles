const express = require("express");
const router = express.Router();
const { requireAuth } = require("../../utils/auth.js");
const { Brewery, Review } = require("../../db/models");

router.get("/:breweryId/reviews", async (req, res) => {
  const { breweryId } = req.params;
  const reviews = await Review.findAll({ where: { breweryId: +breweryId } });
  if (reviews.length) {
    return res.json({ reviews: reviews });
  } else {
    res.status(404);
    return res.json({ message: "There are no reviews for this brewery." });
  }
});
router.post("/:breweryId/reviews", requireAuth, async (req, res) => {
  const { breweryId } = req.params;
  const { description, rating } = req.body;
  const brewery = await Brewery.findOne({ where: { id: +breweryId } });
  if (brewery) {
    const newReview = await Review.create({
      ownerId: req.user.id,
      breweryId: +breweryId,
      rating,
      description,
    });
    console.log(newReview);
    return res.json(newReview);
  } else {
    res.status(404);
    return res.json({ Message: "This Brewery does not exist" });
  }
});
router.get("/:breweryId", async (req, res) => {
  const { breweryId } = req.params;
  let sum = 0;
  const brewery = await Brewery.findOne({
    where: { id: +breweryId },
    include: [{ model: Review }],
  });
  if (brewery) {
    for (let i = 0; i < brewery.Reviews.length; i++) {
      let val = brewery.Reviews[i];
      sum += val.rating;
    }
    let rating = sum / brewery.Reviews.length;
    if (!brewery.Reviews.length) rating = 0;

    return res.json({
      id: brewery.id,
      name: brewery.name,
      addressLineOne: brewery.addressLineOne,
      city: brewery.city,
      description: brewery.description,
      zip: brewery.zip,
      state: brewery.state,
      rating: rating,
      country: brewery.country,
      lat: brewery.lat,
      lng: brewery.lng,
      createdAt: brewery.createdAt,
      updatedAt: brewery.updatedAt,
      reviews: brewery.Reviews,
    });
  } else {
    return res.json({ Message: "This Brewery does not exist." });
  }
});

router.put("/:breweryId", requireAuth, async (req, res) => {
  const sessionId = req.user.id;
  const { breweryId } = req.params;
  const brewery = await Brewery.findOne({
    where: { id: +breweryId },
    include: [{ model: Review }],
  });
  if (brewery) {
    if (sessionId === +brewery.ownerId) {
      const {
        name,
        description,
        addressLineOne,
        city,
        state,
        country,
        lat,
        lng,
        zip,
      } = req.body;
      const mod = await brewery.update({
        name,
        description,
        addressLineOne,
        city,
        state,
        country,
        lat,
        lng,
        zip,
      });
      res.status(200);
      return res.json(mod);
    }
    res.status(403);
    return res.json({ Message: "This Brewery does not belong to you." });
  }
  res.status(404);
  return res.json({ Message: "Brewery Does Not exist" });
});
router.delete("/:breweryId", requireAuth, async (req, res) => {
  const sessionId = req.user.id;
  const { breweryId } = req.params;
  const brewery = await Brewery.findOne({
    where: { id: +breweryId },
    include: [{ model: Review }],
  });
  if (brewery) {
    if (sessionId === +brewery.ownerId) {
      const mod = await brewery.destroy();
      res.status(200);
      return res.json({ message: "Brewery successfully deleted." });
    }
    res.status(403);
    return res.json({ Message: "This Brewery does not belong to you." });
  }
  res.status(404);
  return res.json({ Message: "Brewery Does Not exist" });
});

router.get("/", async (req, res) => {
  let breweries = await Brewery.findAll({ include: [{ model: Review }] });
  const result = [];
  const {state, city} = req.query;
  if(state)breweries = await Brewery.findAll({ include: [{ model: Review }], where:{state} });
  if(city)breweries = await Brewery.findAll({ include: [{ model: Review }], where:{city} });
  if(city && state)breweries = await Brewery.findAll({ include: [{ model: Review }], where:{city, state} });


  for (let i = 0; i < breweries.length; i++) {
    let sum = 0;
    for (let j = 0; j < breweries[i].Reviews.length; j++) {
      sum += breweries[i].Reviews[j].rating;
    }
    let id = breweries[i].id;
    let ownerId = breweries[i].ownerId;
    let addressLineOne = breweries[i].addressLineOne;
    let city = breweries[i].city;
    let description = breweries[i].description;
    let zip = breweries[i].zip;
    let state = breweries[i].state;
    let rating = sum / breweries[i].Reviews.length;
    let country = breweries[i].country;
    let lat = breweries[i].lat;
    let lng = breweries[i].lng;
    let createdAt = breweries[i].createdAt;
    let updatedAt = breweries[i].updatedAt;
    if (!breweries[i].Reviews.length) rating = 0;
    let reviews = breweries[i].Reviews;

    result.push({
      id,
      ownerId,
      addressLineOne,
      city,
      description,
      zip,
      state,
      country,
      lat,
      lng,
      rating,
      createdAt,
      updatedAt,
      reviews,
    });
  }

  return res.json({ Breweries: result });
});

router.post("/", requireAuth, async (req, res) => {
  const {
    name,
    description,
    addressLineOne,
    city,
    state,
    country,
    lat,
    lng,
    zip,
  } = req.body;
  const brewery = await Brewery.create({
    name,
    description,
    addressLineOne,
    zip,
    state,
    country,
    city,
    lat,
    lng,
    ownerId: req.user.id,
  });

  res.json(brewery);
});

module.exports = router;
