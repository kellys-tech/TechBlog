const router = require('express').Router();
const { Comments } = require('../../models');

// UPDATE comment
router.put('/:id', async (req, res) => {
    res.send("works");
    //complete relationship
  });

  // CREATE comment
router.post('/', async (req, res) => {
  try {
    const newProject = await Comments.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

//DELETE comment
router.delete('/:id', async (req, res) => {
  try {
    const projectData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!projectData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
