const router = require('express').Router();
const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes.js');
const commentRoutes = require("./comment-routes");

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;