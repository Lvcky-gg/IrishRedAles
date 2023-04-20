const router = require('express').Router();

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const breweryRouter = require('./brewery.js');
const reviewRouter = require('./review.js');
const reviewLikeRouter = require('./reviewLikes.js');
const breweryLikeRouter = require('./breweryLikes.js')
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
const { route } = require('./session.js');
// const { requireAuth } = require('../../utils/auth.js');
router.use(restoreUser);

router.use('/session', sessionRouter);
router.use('/breweries', breweryRouter);
router.use('/reviews', reviewRouter);
router.use('/brewery-likes', breweryLikeRouter);
router.use('/review-likes', reviewLikeRouter);
router.use('/users', usersRouter);

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});




// router.get(
//   '/restore-user',
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// router.get('/set-token-cookie', async (_req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       }
//     });
//   setTokenCookie(res, user);
//   return res.json({ user });
// });


  

module.exports = router;