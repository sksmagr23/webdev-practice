// models created to create choice schema
import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: String,
  desc: String,
  isDone: Boolean
}); // if data type other than specified in schema is entered, it gives error

export const Todo = mongoose.model('Todo', TodoSchema);

// schema can also contain value as object