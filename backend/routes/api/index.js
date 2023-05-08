const router = require("express").Router();

const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const breweryRouter = require("./brewery.js");
const reviewRouter = require("./review.js");
const reviewLikeRouter = require("./reviewLikes.js");
const breweryLikeRouter = require("./breweryLikes.js");
const photoRouter = require("./photos.js");
const beerRouter = require("./beer.js")

const { restoreUser } = require("../../utils/auth.js");
const { route } = require("./session.js");

router.use(restoreUser);

router.use("/session", sessionRouter);
router.use("/breweries", breweryRouter);
router.use("/reviews", reviewRouter);
router.use("/brewery-likes", breweryLikeRouter);
router.use("/review-likes", reviewLikeRouter);
router.use("/users", usersRouter);
router.use("/photos", photoRouter);
router.use("/beers", beerRouter)

router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

module.exports = router;
