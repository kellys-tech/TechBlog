const router = require('express').Router();
const { Comments } = require('../../models');

// UPDATE comment
router.put('/:id', async (req, res) => {
  try {
    const updateComment = await Comment.update({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!updateComment) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }
    res.status(200).json(updateComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // CREATE comment
router.post('/', async (req, res) => {
  try {
    const newComment = await Comments.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

//DELETE comment
router.delete('/:id', async (req, res) => {
  try {
    const deleteComment = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!deleteComment) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }
    res.status(200).json(deleteComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
