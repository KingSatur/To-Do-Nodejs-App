import { Router } from 'express';
import { TaskModel } from '../models/Task';

const viewsRouter = Router();

viewsRouter.get('/', async function (req, res) {
  const todos = await TaskModel.find().lean();
  res.render('index', { todos });
});
viewsRouter.get('/edit/:id', async function (req, res) {
  const { id } = req.params;
  const todo = await TaskModel.findById(id).lean();
  res.render('edit', { todo });
});
viewsRouter.get('/about', function (req, res) {
  res.render('about');
});

export default viewsRouter;
