import { Router } from 'express';

const viewsRouter = Router();

viewsRouter.get('/', function (req, res) {
  res.render('index');
});
viewsRouter.get('/edit', function (req, res) {
  res.render('edit');
});
viewsRouter.get('/about', function (req, res) {
  res.render('about');
});

export default viewsRouter;
