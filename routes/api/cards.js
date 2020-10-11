const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

//Models
const User = require('../../models/User');
const Board = require('../../models/Board');
const Column = require('../../models/Column');
const Card = require('../../models/Card');

// @route   POST api/cards
// @desc    Create  a card
// @access  Private
// @req     x-auth-token, boardId, title, columnId
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, columnId, cardId, color } = req.body;

    await Card.find().exec();
    const newCard = new Card({
      title,
      description,
      column: columnId,
      cardId,
      color,

    });
    const result = await newCard.save();

    const column = await Column.findById(columnId);
    if (!column) {
      return res.status(404).json({ message: 'Column Could Not Be Found' });
    }

    const newCardIds = Array.from(column.cardIds);
    newCardIds.push(result.cardId);
    column.set({ cardIds: newCardIds });
    const result2 = await column.save();
    return res.status(201).json({
      message: 'new card is created and also cardIds in column is also updated',
      card: result,
      column: result2,
    });

  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/cards/:id
// @desc    Delete a card
// @access  Private
router.delete('/:id/:columnId', auth, async (req, res) => {

  try {
    const card = await Card.findById(req.params.id);
    const column = await Column.findById(req.params.columnId);
    if (!card) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    const newCardIds = [];
    column.cardIds.filter(function (obj) {
      if (obj !== card.cardId) {
        newCardIds.push(obj);
      }
    });
    column.set({ cardIds: newCardIds });
    await column.save();
    await card.remove();
    res.json({ msg: 'Post removed' });
  } catch (error) {
    console.log(error);
  }
});

// @route    POST api/cards
// @desc     send columnId get back tickets
// @access   Private
// @req      x-auth-token, columnId

//Extracted Function
const findAllCards = columnId =>
  Card.find({ column: columnId }).select(
    'cardId title description cardNumb color'
  );


router.post('/getallcards', auth, async (req, res) => {
  try {
    const { columnIds } = req.body;
    let totalCards = [];
    if (columnIds && columnIds.length > 0) {
      let i = 0;
      for (const columnId of columnIds) {
        const cards = await findAllCards(columnId);
        if (cards.length > 0) {
          totalCards.push(cards);
        }
      }
      return res.status(200).json({ message: 'Success', cards: totalCards });
    }
  } catch (error) {
    console.log(error);
  }

});

// @route    POST api/cards/reorder/samecolumn
// @desc     send columnId get back tickets
// @access   Private
// @req     tbd

router.post('/reorder/samecolumn', auth, async (req, res) => {
  try {
    const { sameColumnId, samecolumnCardIds } = req.body;

    const column = await Column.findOne({ _id: sameColumnId });

    if (!column) {
      return res
        .status(404)
        .json({ message: 'unable to find column of provided id' });
    }

    column.set({ cardIds: samecolumnCardIds });

    const savedColumn = await column.save();
    return res
      .status(200)
      .json({ message: 'same column reorder success', savedColumn });

  } catch (error) {
    return error;
  }
});

router.post('/reorder/differentcolumn', auth, async (req, res) => {
  try {
    const {
      removedColumnId,
      addedColumnId,
      removedColumnCardIds,
      addedColumnCardIds,
    } = req.body;

    const removedcolumn = await Column.findOne({ _id: removedColumnId });
    removedcolumn.set({ cardIds: removedColumnCardIds });
    await removedcolumn.save();

    const addedcolumn = await Column.findOne({ _id: addedColumnId });
    addedcolumn.set({ cardIds: addedColumnCardIds });
    await addedcolumn.save();

    return res
      .status(200)
      .json({ message: 'different column reorder success' });
  } catch (error) {
    console.log(error, 'error');
  }
});

module.exports = router;
