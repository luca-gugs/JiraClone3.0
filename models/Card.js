const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardSchema = new Schema({
  cardId: { type: String },
  title: { type: String, required: true },
  description: { type: String, required: true },
  column: { type: String, ref: 'cards' },
  cardNumb: { type: Number },
});

const Card = mongoose.model('cards', CardSchema);

module.exports = Card;
