import { Router } from 'express';

const todoRouter = Router();

todoRouter.get('/todo', function (req, res) {
  res.render('index.html');
});
todoRouter.post('/todo', function (req, res) {});
todoRouter.get('/todo/:id', function (req, res) {});
todoRouter.delete('/todo/:id', function (req, res) {});

export default todoRouter;
