const router = require('express').Router();
const { Comment } = require('../../models/');
const { beforeDestroy } = require('../../models/User');
const withAuth = require('../../utils/auth');

// URL: /api/comment
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...body,
      userId: req.params.id
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
