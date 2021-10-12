const router = require('express').Router();
const { Comment } = require('../../models/');
const { beforeDestroy } = require('../../models/User');
const withAuth = require('../../utils/auth');

// URL: /api/comment
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      // TODO: COMMENT BODY IN REQUEST USING SPREAD
      // TODO: SET USERID userId TO SESSION LOGGEDIN USERID
      ...body,
      userId: req.params.id
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
