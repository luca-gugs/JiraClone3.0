const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

//Models
const User = require('../../models/User');
const Board = require('../../models/Board');
const Column = require('../../models/Column');

// @route   POST api/columns
// @desc    Create  a Column
// @access  Private
// @req     x-auth-token, boardId, title, columnId

router.post('/', auth, async (req, res) => {
  try {
    const { title, boardId, columnId } = req.body;
    await Column.find().exec();
    const newColumn = new Column({
      board: boardId,
      title,
      columnId,
      cardIds: [],
    });
    const result = await newColumn.save();
    const board = await Board.findById(boardId).exec();
    if (!board) {
      res.status(404).json({ message: 'No Board exists of provided id' });
    }
    const newColumnOrder = Array.from(board.columnOrder);

    newColumnOrder.push(result.columnId);

    board.set({ columnOrder: newColumnOrder });
    const result2 = await board.save();
    return res.status(201).json({
      message: 'New Column Added and also updated columnOrder in board',
      column: result,
      board: result2,
    });
  } catch (error) {}
});

// @route   Get api/columns/:boardId
// @desc    Get all columns in given board
// @access  Private
// @req     x-auth-token, boardId
router.get('/all/:boardId', auth, async (req, res) => {
  try {
    const { boardId } = req.params;
    const board = await Board.findOne({ _id: boardId })
      .select('columnOrder')
      .exec();

    const columns = await Column.find({ board: boardId })
      .select('cardIds title columnId')
      .exec();

    return res
      .status(200)
      .json({ message: 'success', columns: columns, board: board });
  } catch (error) {
    console.log(error);
  }
});

// @route   Post api/columns/:_id
// @desc    Change Name of Column
// @access  Private
// @req     x-auth-token, columnId, title
router.post('/:_id', auth, async (req, res) => {
  try {
    const { _id } = req.params;

    const newTitle = req.body.title;
    column = await Column.findOneAndUpdate(
      { _id: _id },
      { title: newTitle },
      { new: true }
    );
    return res.json(column);
  } catch (error) {
    console.log(error, 'error');
  }
});

module.exports = router;
