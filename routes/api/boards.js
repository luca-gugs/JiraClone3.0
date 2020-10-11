const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

//Models
const User = require('../../models/User');
const Board = require('../../models/Board');

// @route   POST api/boards
// @desc    Create  Board
// @access  Private
// @req     x-auth-token,  title
router.post(
  '/',
  [auth, [check('title', 'title is required').not().isEmpty()]],
  async (req, res) => {
    //Validate Response
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Create New Board
    try {
      const user = await User.findById(req.user.id);

      const newBoard = new Board({
        user: req.user.id,
        title: req.body.title,
        columnOrder: [],
      });

      const board = await newBoard.save();

      res.json(board);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   GET api/boards/all
// @desc    Gets All Boards Created By A Given User
// @access  Private
// @req     x-auth-token,  title
router.get('/all', auth, async (req, res) => {
  try {
    const boards = await Board.find({ user: req.user.id });
    res.json(boards);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
