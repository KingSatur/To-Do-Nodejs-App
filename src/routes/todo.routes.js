import { Router } from 'express';
import { saveTodo, deleteTodo, toggleTodo } from '../controllers/todo.controller';

const todoRouter = Router();

todoRouter.get('/todo', function (req, res) {
  res.render('index.html');
});
todoRouter.post('/todo', saveTodo);
todoRouter.get('/todo/:id', deleteTodo);
todoRouter.get('/todo/:id/toggle', toggleTodo);
todoRouter.post('/todo/:id', saveTodo);

export default todoRouter;
