import { request, response } from 'express';
import { TaskModel } from '../models/Task';

export const saveTodo = async function (req = request, res = response) {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const task = id
      ? await TaskModel.findByIdAndUpdate(id, { title, description })
      : await TaskModel({ title, description }).save();
    return res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async function (req = request, res = response) {
  const { id } = req.params;
  await TaskModel.findByIdAndDelete(id);
  return res.redirect('/');
};
export const toggleTodo = async function (req = request, res = response) {
  const { id } = req.params;
  await TaskModel.findByIdAndUpdate(id, [{ $set: { done: { $not: '$done' } } }]);
  return res.redirect('/');
};
