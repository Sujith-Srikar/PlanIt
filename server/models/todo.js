const { Schema, model, mongoose} = require('mongoose')

const todoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Todo = model('Todos', todoSchema)

module.exports = Todo